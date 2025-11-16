const mongoose = require('mongoose');

const HistoryEntry = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    score: { type: Number }, // 0-100
    date: { type: Date, default: Date.now }
}, { _id: false });

const PredictionSchema = new mongoose.Schema({
    subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true, index: true },
    predictedAverage: { type: Number },
    passProbability: { type: Number }, // 0..1
    generatedAt: { type: Date, default: Date.now },
    history: [HistoryEntry],
    metadata: { type: mongoose.Schema.Types.Mixed }
});

module.exports = mongoose.model('Prediction', PredictionSchema);