const mongoose = require('mongoose');

const PredictionSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  semesterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Semester', required: true },
  
  predictedMarks: { type: Number }, 
  predictedGrade: { type: String }, 
  
  passProbability: { type: Number },
  
  riskLevel: { type: String, enum: ['safe', 'warning', 'danger'], default: 'safe' },
  
  algorithm: { type: String }, 
  confidence: { type: Number }, 
  metadata: { type: mongoose.Schema.Types.Mixed },
  
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Prediction', PredictionSchema);