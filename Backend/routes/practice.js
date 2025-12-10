const express = require("express");
const router = express.Router();
const practice = require("../json/practice.json");

router.get("/new", (req, res) => {
  res.json(practice.newTests);
});

router.get("/completed", (req, res) => {
  res.json(practice.completedTests);
});

module.exports = router;
