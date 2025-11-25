const express = require('express');
const router = express.Router();
const predictionController = require('../controllers/predictionsController');

// GET /api/predictions/subject/:subjectId
router.get('/subject/:subjectId', predictionController.getPredictionForSubject);

module.exports = router;