const express = require('express');
const router = express.Router();
const predictionController = require('../controllers/predictionsController');


router.get('/subject/:subjectId', predictionController.getPredictionForSubject);

module.exports = router;