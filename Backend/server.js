const express = require("express");
const cors = require("cors");
const port = 5000;

const studentRoutes = require("./routes/student");
const examRoutes = require("./routes/exams");
const practiceRoutes = require("./routes/practice");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/student", studentRoutes);
app.use("/exams", examRoutes);
app.use("/practice", practiceRoutes);

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
