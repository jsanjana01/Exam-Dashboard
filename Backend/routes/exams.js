const express = require("express");
const router = express.Router();
const exams = require("../json/exams.json");

router.get("/current", (req, res) => {
  res.json(exams.current);
});

router.get("/completed", (req, res) => {
  res.json(exams.completed);
});

module.exports = router;
