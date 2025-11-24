const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  semesterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Semester', required: true },
  
  reportType: { type: String, enum: ['semester', 'full'], default: 'semester' },
  
  marksSnapshot: [{ type: mongoose.Schema.Types.Mixed }], 
  predictionsSnapshot: [{ type: mongoose.Schema.Types.Mixed }],
  analyticsSnapshot: { type: mongoose.Schema.Types.Mixed },
  
  generatedAt: { type: Date, default: Date.now },
  pdfUrl: { type: String }, 
  expiresAt: { type: Date }
});

module.exports = mongoose.model('Report', ReportSchema);