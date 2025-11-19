const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, 
  department: { type: String, required: true },
  year: { type: Number, required: true },
  section: { type: String }, 
  cgpa: { type: Number, default: 0 },
  semesters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Semester' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Student', StudentSchema);