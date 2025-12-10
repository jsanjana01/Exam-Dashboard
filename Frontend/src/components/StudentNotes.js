import { useState } from "react";
import { FileText, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";

const NOTES = [
  {
    id: "psat2",
    label: "PSAT/NMSQT Test 2",
    title: "PSAT/NMSQT Test 2",
    created: "05/12/2024",
    sections: [
      {
        heading: "Performance Summary:",
        lines: [
          "✓ Math: Strong showing in problem-solving",
          "✓ Reading: Good comprehension skills",
        ],
      },
      {
        heading: "Areas for improvement:",
        lines: [
          "- Speed up on calculation-heavy problems",
          "- Review vocabulary in context questions",
        ],
      },
      {
        heading: "Next steps:",
        lines: [
          "- Complete 3 more practice tests",
          "- Focus on timed sections",
        ],
      },
    ],
  },
  {
    id: "sat4",
    label: "SAT Practice Test 4",
    title: "SAT Practice Test 4",
    created: "10/12/2024",
    sections: [
      {
        heading: "Key areas to focus on:",
        lines: [
          "1. Algebra – Quadratic equations need more practice",
          "2. Reading Comprehension – Work on inference questions",
          "3. Grammar – Review parallel structure rules",
          "4. Essay – Strengthen thesis statements",
        ],
      },
      {
        heading: "Strengths:",
        lines: [
          "- Strong performance in geometry",
          "- Good time management",
          "- Clear understanding of data analysis",
        ],
      },
    ],
  },
];

function StudentNotesCard() {
  const [selectedId, setSelectedId] = useState("");
  const selectedNote = NOTES.find((n) => n.id === selectedId);
  return (
    <div className="bg-white dark:bg-slate-950 rounded-3xl shadow-[0_18px_45px_rgba(249,115,22,0.18)] dark:shadow-[0_18px_45px_rgba(15,23,42,0.9)] overflow-hidden border border-orange-100 dark:border-orange-600 flex-1">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 dark:from-orange-600 dark:to-amber-600 px-8 py-5 text-white flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <FileText size={18} />
        </div>
        <div>
          <h2 className="text-lg font-semibold">Student Notes</h2>
          <p className="text-sm text-orange-100 dark:text-orange-50/80">
            View your test notes and feedback
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="px-8 py-6">
        {/* Dropdown */}
        <select
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
          className="w-full border border-gray-300 dark:border-slate-600 rounded-xl px-4 py-3 text-sm text-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-white dark:bg-slate-900"
        >
          <option value="" className="text-gray-500 dark:text-gray-400">
            Select a test to see your notes
          </option>
          {NOTES.map((note) => (
            <option key={note.id} value={note.id}>
              {note.label}
            </option>
          ))}
        </select>

        {/* Content */}
        {!selectedNote ? (
          <div className="flex flex-col items-center justify-center py-16 text-center text-gray-400 dark:text-gray-500">
            <div className="w-16 h-16 border-4 border-gray-200 dark:border-slate-700 rounded-2xl flex items-center justify-center mb-4">
              <FileText size={30} />
            </div>
            <p className="text-base">Select a test to view notes</p>
          </div>
        ) : (
          <div className="mt-6 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-500/70 rounded-2xl px-6 py-6 text-gray-800 dark:text-gray-100">
            <h3 className="text-lg font-semibold mb-4">{selectedNote.title}</h3>

            <div className="space-y-4 text-sm leading-relaxed">
              {selectedNote.sections.map((section, idx) => (
                <div key={idx}>
                  <p className="font-semibold mb-1">{section.heading}</p>
                  {section.lines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-gray-500 dark:text-gray-400">
              Created: {selectedNote.created}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function StatisticsCard() {
  const total = 20;
  const sat = 12;
  const psat = 8;

  const satPercent = (sat / total) * 100;
  const psatPercent = (psat / total) * 100;

  return (
    <motion.div
      className="bg-white dark:bg-slate-950 rounded-3xl shadow-[0_18px_45px_rgba(129,140,248,0.25)] dark:shadow-[0_18px_45px_rgba(15,23,42,0.9)] overflow-hidden border border-purple-200 dark:border-purple-600 flex-1 mt-6 lg:mt-0"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-fuchsia-500 dark:from-purple-600 dark:to-fuchsia-600 px-8 py-5 text-white flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <BarChart2 size={18} />
        </div>
        <div>
          <h2 className="text-lg font-semibold">Statistics</h2>
          <p className="text-sm text-purple-100 dark:text-purple-50/80">
            Your test completion summary
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="px-8 py-8">
        <div className="text-center mb-8">
          <motion.p
            className="text-5xl font-bold text-purple-600 dark:text-purple-300"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
          >
            {total}
          </motion.p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Total Tests Completed
          </p>
        </div>

        <hr className="border-gray-200 dark:border-slate-700 mb-6" />

        {/* SAT */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-gray-800 dark:text-gray-100">
              SAT
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-purple-500 text-white font-semibold">
              {sat} tests
            </span>
          </div>
          <div className="w-full h-3 bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gray-900 dark:bg-purple-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${satPercent}%` }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* PSAT */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-gray-800 dark:text-gray-100">
              PSAT
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-teal-500 text-white font-semibold">
              {psat} tests
            </span>
          </div>
          <div className="w-full h-3 bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gray-900 dark:bg-teal-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${psatPercent}%` }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function NotesAndStatistics() {
  return (
    <section className="w-full max-w-6xl mx-auto mt-8">
      <div className="flex flex-col lg:flex-row gap-6">
        <StudentNotesCard />
        <StatisticsCard />
      </div>
    </section>
  );
}
