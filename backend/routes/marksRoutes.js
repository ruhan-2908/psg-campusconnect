const express = require('express');
const router = express.Router();
const {
  getMarks,
  saveExpectedMarks
} = require('../controllers/marksController');

// Fetch actual CAT/MCQ/SEM marks
router.get('/', getMarks);

// Save expected marks for predictions
router.post('/expected', saveExpectedMarks);

module.exports = router;
