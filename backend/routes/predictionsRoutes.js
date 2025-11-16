const express = require('express');
const router = express.Router();
const predictionsController = require('../controllers/predictionsController');

// GET /api/predictions/subject/:subjectId
router.get('/subject/:subjectId', predictionsController.getPredictionForSubject);

module.exports = router;