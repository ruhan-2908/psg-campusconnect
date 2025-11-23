const Marks = require('../models/Marks');
const ExpectedMarks = require('../models/Expectation');

// -------------------------------
// GET /api/marks
// Fetch marks for a student + subject
// -------------------------------
exports.getMarks = async (req, res) => {
  try {
    const { studentId, subjectId, semesterId } = req.query;

    if (!studentId || !subjectId || !semesterId) {
      return res.status(400).json({ message: "studentId, subjectId, semesterId required" });
    }

    const marks = await Marks.findOne({
      studentId,
      subjectId,
      semesterId
    });

    return res.status(200).json(marks || {});
  } catch (error) {
    console.error("Error fetching marks:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// -------------------------------
// POST /api/marks/expected
// Save expected marks for predictions
// -------------------------------
exports.saveExpectedMarks = async (req, res) => {
  try {
    const {
      studentId,
      subjectId,
      semesterId,
      expectedCat1,
      expectedCat2,
      expectedCa,
      expectedMCQ1,
      expectedMCQ2,
      expectedSemExam,
      expectedTotal
    } = req.body;

    if (!studentId || !subjectId || !semesterId) {
      return res.status(400).json({ message: "studentId, subjectId, semesterId required" });
    }

    const updated = await ExpectedMarks.findOneAndUpdate(
      { studentId, subjectId, semesterId },
      {
        expectedCat1,
        expectedCat2,
        expectedCa,
        expectedMCQ1,
        expectedMCQ2,
        expectedSemExam,
        expectedTotal,
        updatedAt: Date.now()
      },
      { new: true, upsert: true }
    );

    return res.status(200).json({
      message: "Expected marks saved",
      data: updated
    });
  } catch (error) {
    console.error("Error saving expected marks:", error);
    res.status(500).json({ message: "Server error" });
  }
};
