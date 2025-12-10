const express = require("express");
const router = express.Router();
const student = require("../json/student.json");

router.get("/", (req, res) => {
  res.json(student);
});

module.exports = router;
