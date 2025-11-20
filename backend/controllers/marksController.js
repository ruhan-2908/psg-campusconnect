// GET /api/marks
exports.getMarks = async (req, res) => {
  res.json({
    message: "Marks fetched successfully (starter code)",
  });
};

// POST /api/marks/expected
exports.saveExpectedMarks = async (req, res) => {
  res.json({
    message: "Expected marks saved (starter code)",
  });
};
