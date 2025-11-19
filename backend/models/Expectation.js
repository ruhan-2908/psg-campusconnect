const mongoose = require('mongoose');

const ExpectedMarksSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  semesterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Semester', required: true },
  expectedCat1: { type: Number },
  expectedCat2: { type: Number },
  expectedCa: { type: Number },
  expectedMCQ1: { type: Number },
  expectedMCQ2: { type: Number },
  expectedSemExam: { type: Number },
  expectedTotal: { type: Number },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ExpectedMarks', ExpectedMarksSchema);