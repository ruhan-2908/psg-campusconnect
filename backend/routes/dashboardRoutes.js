const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// GET /api/dashboard/semester/:semesterId
router.get('/semester/:semesterId', dashboardController.getSemesterAnalytics);

module.exports = router;