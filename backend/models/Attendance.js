const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  semesterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Semester', required: true },
  
  hoursHeld: { type: Number, default: 0 },
  hoursAttended: { type: Number, default: 0 },
  percentage: { type: Number, default: 0 }, 
  
  lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Attendance', AttendanceSchema);