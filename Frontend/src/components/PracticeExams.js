import { useState } from "react";
import { BookOpen, CheckCircle2, Clock, Eye, Play } from "lucide-react";

export default function PracticeExams({ newExams = [], completedExams = [] }) {
  const [activeTab, setActiveTab] = useState("new");

  const renderLeftIcon = (color, completed) => {
    const base =
      "w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm";
    const colorClass =
      color === "mint"
        ? "bg-teal-50 text-teal-500 dark:bg-teal-900/40 dark:text-teal-300"
        : "bg-purple-50 text-purple-500 dark:bg-purple-900/40 dark:text-purple-300";

    return (
      <div className={`${base} ${colorClass}`}>
        {completed ? <CheckCircle2 size={26} /> : <BookOpen size={26} />}
      </div>
    );
  };

  const renderNew = () => (
    <div className="space-y-4 mt-6">
      {newExams.map((exam) => (
        <div
          key={exam.id}
          className="flex items-center justify-between bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-700 px-6 py-5 shadow-sm"
        >
          <div className="flex items-center gap-5">
            {renderLeftIcon(exam.color, false)}

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {exam.title}
              </h3>

              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <span className="px-3 py-1 rounded-full border border-gray-300 dark:border-slate-600 text-xs font-semibold">
                  {exam.tag}
                </span>

                <span className="flex items-center gap-1">
                  <Clock size={16} /> {exam.duration}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-5 py-2 rounded-xl border border-indigo-500 text-indigo-600 dark:text-indigo-300 font-medium text-sm flex items-center gap-2 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition">
              <Eye size={16} />
              Preview
            </button>
            <button className="px-5 py-2 rounded-xl bg-indigo-500 dark:bg-indigo-600 text-white font-semibold text-sm flex items-center gap-2 shadow-md hover:bg-indigo-600 dark:hover:bg-indigo-500 transition whitespace-nowrap">
              <Play size={16} />
              Full Test
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCompleted = () => (
    <div className="space-y-4 mt-6">
      {completedExams.map((exam, index) => (
        <div
          key={exam.id}
          className={`flex items-center justify-between bg-white dark:bg-slate-900 rounded-2xl border px-6 py-5 shadow-sm ${
            index === 1
              ? "border-indigo-300 dark:border-indigo-500 shadow-[0_0_0_1px_rgba(79,70,229,0.35)] dark:shadow-[0_0_0_1px_rgba(129,140,248,0.5)]"
              : "border-gray-200 dark:border-slate-700"
          }`}
        >
          <div className="flex items-center gap-5">
            {renderLeftIcon(exam.color, true)}

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {exam.title}
              </h3>

              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <span className="px-3 py-1 rounded-full border border-gray-300 dark:border-slate-600 text-xs font-semibold">
                  {exam.tag}
                </span>

                <span className="flex items-center gap-1">
                  <Clock size={16} /> {exam.duration}
                </span>
              </div>
            </div>
          </div>

          <button className="px-6 py-2 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-100 font-semibold shadow-sm hover:bg-gray-50 dark:hover:bg-slate-800 transition">
            View Results
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <section className="w-full max-w-6xl mx-auto mt-8">
      <div className="bg-white dark:bg-slate-950 rounded-3xl shadow-[0_18px_45px_rgba(79,70,229,0.18)] dark:shadow-[0_18px_45px_rgba(15,23,42,0.9)] overflow-hidden border border-indigo-100 dark:border-indigo-700">
        {/* Top header */}
        <div className="bg-indigo-500 dark:bg-indigo-600 px-8 py-5 text-white flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
            <BookOpen size={18} />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Practice Exams</h2>
            <p className="text-sm text-indigo-100 dark:text-indigo-200">
              Sharpen your skills with practice tests
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-8 py-6">
          <div className="bg-gray-100 dark:bg-slate-800 flex overflow-hidden text-sm font-semibold text-gray-500 dark:text-gray-400 rounded-full border border-gray-300 dark:border-slate-600">
            {["new", "completed"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 text-center transition ${
                  activeTab === tab
                    ? "bg-white dark:bg-slate-900 shadow-sm text-gray-800 dark:text-gray-100"
                    : "bg-transparent hover:text-gray-700 dark:hover:text-gray-200"
                }`}
              >
                {tab === "new" ? "New" : "Completed"}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === "new" && renderNew()}
          {activeTab === "completed" && renderCompleted()}
        </div>
      </div>
    </section>
  );
}
