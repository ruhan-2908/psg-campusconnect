const Semester = require('../models/Semester');
const Subject = require('../models/Subject');
const Marks = require('../models/Marks');
const Prediction = require('../models/Predictions');
const mongoose = require('mongoose');

exports.getSemesterAnalytics = async (req, res) => {
  const { semesterId } = req.params;

  try {
    if (!semesterId) {
      return res.status(400).json({ message: 'Semester ID is required' });
    }

   
    const semester = await Semester.findById(semesterId)
      .populate('subjects')
      .lean();

    if (!semester) {
      return res.status(404).json({ message: 'Semester not found' });
    }

    const subjectIds = semester.subjects.map(s => s._id);

    
    const marksAggregation = await Marks.aggregate([
      { $match: { subjectId: { $in: subjectIds.map(id =>new mongoose.Types.ObjectId(id)) } } },
      {
        $group: {
          _id: '$subjectId',
          avgScore: { $avg: '$total' },
          maxScore: { $max: '$total' },
          minScore: { $min: '$total' },
          passCount: { $sum: { $cond: [{ $gte: ['$total', 40] }, 1, 0] } },
          totalCount: { $sum: 1 },
          avgGPA: { $avg: '$gpa' }
        }
      },
      { $sort: { avgScore: -1 } }
    ]);

    
    const subjectMetrics = semester.subjects.map(subject => {
      const marksData = marksAggregation.find(
        m => m._id.toString() === subject._id.toString()
      );

      const passRate = marksData
        ? (marksData.passCount / marksData.totalCount * 100).toFixed(2)
        : 0;

      return {
        subjectId: subject._id,
        subjectName: subject.name,
        subjectCode: subject.code,
        credits: subject.credits,
        avgScore: marksData ? marksData.avgScore.toFixed(2) : null,
        maxScore: marksData ? marksData.maxScore : null,
        minScore: marksData ? marksData.minScore : null,
        passRate: parseFloat(passRate),
        avgGPA: marksData ? marksData.avgGPA.toFixed(2) : null,
        studentCount: marksData ? marksData.totalCount : 0
      };
    });

    
    const validGPAs = subjectMetrics.filter(s => s.avgGPA !== null).map(s => parseFloat(s.avgGPA));
    const semesterAvgGPA = validGPAs.length
      ? (validGPAs.reduce((a, b) => a + b, 0) / validGPAs.length).toFixed(2)
      : null;

    
    const validScores = subjectMetrics.filter(s => s.avgScore !== null).map(s => parseFloat(s.avgScore));
    const semesterAvgScore = validScores.length
      ? (validScores.reduce((a, b) => a + b, 0) / validScores.length).toFixed(2)
      : null;

    
    const totalPassCount = marksAggregation.reduce((sum, m) => sum + m.passCount, 0);
    const totalStudents = marksAggregation.reduce((sum, m) => sum + m.totalCount, 0);
    const overallPassRate = totalStudents > 0
      ? (totalPassCount / totalStudents * 100).toFixed(2)
      : null;

    
    const topSubjects = subjectMetrics
      .filter(s => s.avgScore !== null)
      .sort((a, b) => parseFloat(b.avgScore) - parseFloat(a.avgScore))
      .slice(0, 3);

    const bottomSubjects = subjectMetrics
      .filter(s => s.avgScore !== null)
      .sort((a, b) => parseFloat(a.avgScore) - parseFloat(b.avgScore))
      .slice(0, 3);

    // Subjects in danger zone (pass rate < 60%)
    const dangerSubjects = subjectMetrics.filter(s => s.passRate < 60);

    // Fetch predictions for this semester
    const predictions = await Prediction.find({ semesterId }).lean();

    // Calculate average pass probability
    const validProbabilities = predictions.filter(p => p.passProbability !== null);
    const avgPassProbability = validProbabilities.length
      ? (validProbabilities.reduce((sum, p) => sum + p.passProbability, 0) / validProbabilities.length * 100).toFixed(2)
      : null;

    // Risk level summary
    const riskLevels = {
      safe: predictions.filter(p => p.riskLevel === 'safe').length,
      warning: predictions.filter(p => p.riskLevel === 'warning').length,
      danger: predictions.filter(p => p.riskLevel === 'danger').length
    };

    return res.json({
      semester: {
        id: semester._id,
        number: semester.number,
        year: semester.year,
        startDate: semester.startDate,
        endDate: semester.endDate
      },
      overallAnalytics: {
        semesterAvgScore: parseFloat(semesterAvgScore),
        semesterAvgGPA: parseFloat(semesterAvgGPA),
        overallPassRate: parseFloat(overallPassRate),
        totalSubjects: subjectMetrics.length,
        totalStudents: totalStudents,
        avgPassProbability: parseFloat(avgPassProbability)
      },
      subjectMetrics: subjectMetrics,
      topSubjects: topSubjects,
      bottomSubjects: bottomSubjects,
      dangerSubjects: dangerSubjects,
      riskSummary: riskLevels,
      trend: {
        message: 'Trend analysis available with historical data'
      }
    });
  } catch (error) {
    console.error('getSemesterAnalytics error:', error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};