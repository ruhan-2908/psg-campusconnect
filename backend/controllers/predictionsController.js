const Prediction = require('../models/Predictions');

exports.getPredictionForSubject = async (req, res) => {
    const { subjectId } = req.params;
    try {
        const prediction = await Prediction.findOne({ subjectId })
            .populate({ path: 'subjectId', select: 'name code semester' })
            .lean();

        if (!prediction) return res.status(404).json({ message: 'Prediction not found' });

        return res.json({
            subject: prediction.subjectId || null,
            predictedAverage: prediction.predictedAverage ?? null,
            passProbability: prediction.passProbability ?? null,
            generatedAt: prediction.generatedAt,
            historyCount: Array.isArray(prediction.history) ? prediction.history.length : 0,
            historySample: prediction.history ? prediction.history.slice(0, 20) : []
        });
    } catch (error) {
        console.error('getPredictionForSubject error:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};