const express = require("express");
const router = express.Router();
const student = require("../json/student.json");

// To fetch student details
router.get("/", (req, res) => {
  res.json(student);
});

module.exports = router;
