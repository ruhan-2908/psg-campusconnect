const mongoose = require('mongoose');

const AnalyticsSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true, index: true },
  semesterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Semester', required: true },
  
  semesterGpa: { type: Number },
  semesterAverage: { type: Number },
  subjectsInDanger: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }],
  passRate: { type: Number }, 
  
  subjectMetrics: [{
    subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
    avgScore: { type: Number },
    maxScore: { type: Number },
    minScore: { type: Number },
    trend: [{ date: Date, score: Number }] 
  }],
  
  attendancePercentage: { type: Number },
  
  weakSubjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }],
  
  lastComputed: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Analytics', AnalyticsSchema);