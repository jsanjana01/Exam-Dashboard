import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import StudentProfile from "./components/StudentProfile";
import YourExams from "./components/YourExams";
import PracticeExams from "./components/PracticeExams";
import StudentNotes from "./components/StudentNotes";
import TestScoresSection from "./components/TestScoresSection";
import Header from "./components/Header";
import HelpSupportSection from "./components/HelpSupportSection";

const Dashboard = () => {
  const [student, setStudent] = useState(null);
  const [currentExams, setCurrentExams] = useState([]);
  const [completedExams, setCompletedExams] = useState([]);
  const [practiceNew, setPracticeNew] = useState([]);
  const [practiceCompleted, setPracticeCompleted] = useState([]);

  useEffect(() => {
    fetch("/student")
      .then((res) => res.json())
      .then((data) => setStudent(data));

    fetch("/exams/current")
      .then((res) => res.json())
      .then((data) => setCurrentExams(data));

    fetch("/exams/completed")
      .then((res) => res.json())
      .then((data) => setCompletedExams(data));

    fetch("/practice/new")
      .then((res) => res.json())
      .then((data) => setPracticeNew(data));

    fetch("/practice/completed")
      .then((res) => res.json())
      .then((data) => setPracticeCompleted(data));
  }, []);

  if (!student) return <p>Loading...</p>;

  return (
    <>
      <div className="sticky top-0 z-50 bg-white">
        <Header />
      </div>
      <div className="w-full max-w-6xl mx-auto mt-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-3">
          Welcome back, {student.fullName}!
          <motion.span
            className="text-4xl inline-block"
            animate={{ rotate: [0, 20, -10, 20, -5, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "70% 70%" }}
          >
            👋
          </motion.span>
        </h1>

        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
          Ready to excel in your test preparation journey
        </p>
      </div>
      <section id="profile">
        <StudentProfile student={student} />
      </section>
      <section id="exams">
        <YourExams
          currentExams={currentExams}
          completedExams={completedExams}
        />
      </section>
      <section id="practice">
        <PracticeExams
          newExams={practiceNew}
          completedExams={practiceCompleted}
        />
      </section>
      <section id="notes">
        <StudentNotes />
      </section>
      <section id="scores">
        <TestScoresSection />
      </section>
      <section id="help">
        <HelpSupportSection />
      </section>
    </>
  );
};

export default Dashboard;
