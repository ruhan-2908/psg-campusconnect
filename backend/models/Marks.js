const mongoose = require('mongoose');

const MarksSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  semesterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Semester', required: true },
  
  //git test
  at1: { type: Number }, 
  at2: { type: Number }, 
  ap: { type: Number },
  mcq1: { type: Number }, 
  mcq2: { type: Number },
  ca1: { type: Number },
  ca2: { type: Number }, 
  sem: { type: Number }, 
  
  internalMarks: { type: Number }, 
  total: { type: Number }, 
  
 
  grade: { type: String }, 
  gradePoint: { type: Number },
  gpa: { type: Number },
  
  
  credits: { type: Number },
  
  // source: { type: String, enum: ['eCampus', 'manual'], default: 'eCampus' },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Marks', MarksSchema);