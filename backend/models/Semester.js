const mongoose = require('mongoose');

const SemesterSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  year: { type: Number, required: true }, 
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }],
  startDate: { type: Date },
  endDate: { type: Date },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Semester', SemesterSchema);