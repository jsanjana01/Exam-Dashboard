import { useState } from "react";
import { BarChart2, Award } from "lucide-react";

const satTests = [
  {
    id: 1,
    name: "SAT Practice Test 4",
    date: "2024-12-10",
    score: 1480,
    maxScore: 1600,
  },
  {
    id: 2,
    name: "SAT Practice Test 3",
    date: "2024-11-28",
    score: 1420,
    maxScore: 1600,
  },
  {
    id: 3,
    name: "SAT Practice Test 2",
    date: "2024-11-15",
    score: 1390,
    maxScore: 1600,
  },
];

const psatTests = [
  {
    id: 1,
    name: "PSAT/NMSQT Test 2",
    date: "2024-12-05",
    score: 1350,
    maxScore: 1520,
  },
  {
    id: 2,
    name: "PSAT/NMSQT Test 1",
    date: "2024-11-20",
    score: 1290,
    maxScore: 1520,
  },
  {
    id: 3,
    name: "PSAT Practice Test",
    date: "2024-11-05",
    score: 1260,
    maxScore: 1520,
  },
];

function getHighestScore() {
  const all = [...satTests, ...psatTests];
  return all.reduce(
    (best, test) => (test.score > best.score ? test : best),
    all[0]
  );
}

export default function ViewTestScores() {
  const highest = getHighestScore();
  const [showAllScores, setShowAllScores] = useState(false);
  const toggleScores = () => setShowAllScores((prev) => !prev);

  return (
    <section className="w-full max-w-6xl mx-auto mt-8">
      <div className="bg-white dark:bg-slate-950 rounded-3xl overflow-hidden shadow-[0_18px_45px_rgba(34,197,94,0.18)] dark:shadow-[0_18px_45px_rgba(15,23,42,0.9)] border border-emerald-100 dark:border-emerald-700">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-green-500 dark:from-emerald-600 dark:to-green-600 px-8 py-5 text-white flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <BarChart2 size={18} />
          </div>
          <div>
            <h2 className="text-lg font-semibold">View Test Scores</h2>
            <p className="text-sm text-emerald-100 dark:text-emerald-200">
              Track your performance over time
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-6">
          {/* Highest score card */}
          <div className="border border-amber-300 dark:border-amber-500 bg-amber-50 dark:bg-amber-900/30 rounded-2xl px-6 py-6 flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 text-sm text-amber-700 dark:text-amber-300 font-semibold mb-3">
                <span role="img" aria-label="trophy">
                  🏅
                </span>
                Highest Score
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-amber-700 dark:text-amber-300">
                  {highest.score}
                </span>
                <span className="text-lg font-semibold text-amber-500 dark:text-amber-300/90">
                  /{highest.maxScore}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                {highest.name}
              </p>
            </div>

            <div className="w-14 h-14 rounded-full border-4 border-amber-300 dark:border-amber-500 flex items-center justify-center text-amber-400 dark:text-amber-300">
              <Award size={30} />
            </div>
          </div>

          {/* SAT section */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-semibold text-gray-800 dark:text-gray-100">
                SAT
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 text-gray-600 dark:text-gray-300">
                3 recent tests
              </span>
            </div>

            <div className="space-y-3">
              {satTests.map((test) => (
                <div
                  key={test.id}
                  className="flex items-center justify-between bg-gray-50 dark:bg-slate-900 rounded-2xl px-6 py-4 border border-gray-200 dark:border-slate-700"
                >
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                      {test.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {test.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                      {test.score}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      out of {test.maxScore}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PSAT section */}
          {showAllScores && (
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-semibold text-gray-800 dark:text-gray-100">
                  PSAT
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 text-gray-600 dark:text-gray-300">
                  3 recent tests
                </span>
              </div>

              <div className="space-y-3">
                {psatTests.map((test, index) => (
                  <div
                    key={test.id}
                    className={`flex items-center justify-between rounded-2xl px-6 py-4 border bg-gray-50 dark:bg-slate-900 ${
                      index === 1
                        ? "border-emerald-300 dark:border-emerald-500 bg-white dark:bg-slate-900"
                        : "border-gray-200 dark:border-slate-700"
                    }`}
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                        {test.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {test.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                        {test.score}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        out of {test.maxScore}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* View all scores button */}
          <div className="flex justify-center pb-2" onClick={toggleScores}>
            <button className="px-6 py-2 rounded-xl border border-emerald-500 text-emerald-600 dark:text-emerald-300 font-semibold text-sm bg-white dark:bg-slate-900 hover:bg-emerald-50 dark:hover:bg-slate-800 transition">
              {showAllScores ? "Hide Scores" : "View All Scores"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
