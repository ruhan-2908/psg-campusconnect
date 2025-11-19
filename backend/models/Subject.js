const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  semester: { type: mongoose.Schema.Types.ObjectId, ref: 'Semester', required: true },
  credits: { type: Number, required: true }, // 0, 1, 3, 4
  markDistribution: {

    at1MaxMarks: { type: Number },
    at2MaxMarks: { type: Number },
    apMaxMarks: { type: Number },
    mcqMaxMarks: { type: Number },
    ca1MaxMarks: { type: Number },
    ca2MaxMarks: { type: Number },
    semMaxMarks: { type: Number },

    at1Weight: { type: Number },
    at2Weight: { type: Number },
    apWeight: { type: Number },
    mcqWeight: { type: Number },
    ca1Weight: { type: Number },
    ca2Weight: { type: Number },
    semWeight: { type: Number }
  },

  gpaCalculationRule: {
    type: String,
    enum: ['4credit', '3credit', '1credit', '0credit'],
    required: true
  },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Subject', SubjectSchema);