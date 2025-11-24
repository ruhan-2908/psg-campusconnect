const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// GET /api/dashboard/semester/:semesterId
router.get('/semester/:semesterId', dashboardController.getSemesterAnalytics);

// GET /api/dashboard/subject/:subjectId
router.get('/subject/:subjectId', dashboardController.getSubjectAnalytics);

module.exports = router;