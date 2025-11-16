const mongoose = require('mongoose');

const SemesterSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  year: { type: Number },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Semester', SemesterSchema);