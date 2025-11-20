const Prediction = require('../models/Predictions');
const Subject = require('../models/Subject');
const Marks = require('../models/Marks');
const { calculateSubjectGPA } = require('../utils/gpaCalculator');

exports.getPredictionForSubject = async (req, res) => {
  const { subjectId } = req.params;
  
  try {
   
    if (!subjectId) {
      return res.status(400).json({ message: 'Subject ID is required' });
    }

    const subject = await Subject.findById(subjectId)
      .populate('semester', 'number year')
      .lean();

    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }

    const prediction = await Prediction.findOne({ subjectId })
      .lean();

    if (!prediction) {
      return res.status(404).json({ message: 'No prediction data available for this subject' });
    }

    
    const marks = await Marks.findOne({ subjectId }).lean();

   
    let currentGPA = null;
    let currentMarks = null;
    if (marks) {
      const gpaCalc = calculateSubjectGPA(marks, subject);
      currentGPA = gpaCalc.gradePoint;
      currentMarks = gpaCalc.totalMarks;
    }

    return res.json({
      subject: {
        id: subject._id,
        name: subject.name,
        code: subject.code,
        credits: subject.credits,
        gpaCalculationRule: subject.gpaCalculationRule,
        semester: subject.semester
      },
      currentMarks: currentMarks,
      currentGPA: currentGPA,
      prediction: {
        predictedMarks: prediction.predictedMarks || null,
        predictedGrade: prediction.predictedGrade || null,
        predictedGpa: prediction.predictedGpa || null,
        passProbability: prediction.passProbability || null,
        riskLevel: prediction.riskLevel || 'unknown',
        confidence: prediction.confidence || null,
        algorithm: prediction.algorithm || null
      },
      generatedAt: prediction.generatedAt,
      metadata: prediction.metadata || null
    });
  } catch (error) {
    console.error('getPredictionForSubject error:', error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};