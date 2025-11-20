const express = require("express");
const router = express.Router();
const {
  getMarks,
  saveExpectedMarks
} = require("../controllers/marksController");

router.get("/", getMarks);              // GET /api/marks
router.post("/expected", saveExpectedMarks);   // POST /api/marks/expected

module.exports = router;
