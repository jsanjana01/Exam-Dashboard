import { useState } from "react";
import {
  BookOpen,
  Play,
  CheckCircle2,
  Calendar,
  Clock,
  HelpCircle,
} from "lucide-react";

export default function YourExams({ currentExams, completedExams }) {
  const [activeTab, setActiveTab] = useState("current");

  const renderExamIcon = (color) => {
    const base =
      "w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm";
    if (color === "purple") {
      return (
        <div
          className={`${base} bg-purple-50 text-purple-500 dark:bg-purple-900/40 dark:text-purple-300`}
        >
          <Play size={26} />
        </div>
      );
    }
    return (
      <div
        className={`${base} bg-teal-50 text-teal-500 dark:bg-teal-900/40 dark:text-teal-300`}
      >
        <Play size={26} />
      </div>
    );
  };

  const renderCurrent = () => (
    <div className="space-y-4 mt-6">
      {currentExams.map((exam) => (
        <div
          key={exam.id}
          className="flex items-center justify-between bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-700 px-6 py-5 shadow-sm"
        >
          <div className="flex items-center gap-5">
            {renderExamIcon(exam.color)}

            <div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-gray-100">
                {exam.title}
              </h3>

              <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="px-3 py-1 rounded-full border border-gray-300 dark:border-slate-600 text-xs font-semibold">
                  {exam.tag}
                </span>

                <span className="flex items-center gap-1">
                  <Calendar size={16} /> {exam.date}
                </span>

                <span className="flex items-center gap-1">
                  <Clock size={16} /> {exam.duration}
                </span>
              </div>
            </div>
          </div>

          <button className="px-6 py-2 rounded-xl bg-teal-600 dark:bg-teal-500 text-white font-semibold shadow-md hover:bg-teal-700 dark:hover:bg-teal-400 transition whitespace-nowrap">
            Open Test
          </button>
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
            index === 0
              ? "border-teal-300 dark:border-teal-500 shadow-[0_0_0_1px_rgba(45,212,191,0.4)] dark:shadow-[0_0_0_1px_rgba(45,212,191,0.6)]"
              : "border-gray-200 dark:border-slate-700"
          }`}
        >
          <div className="flex items-center gap-5">
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm ${
                exam.color === "purple"
                  ? "bg-purple-50 text-purple-500 dark:bg-purple-900/40 dark:text-purple-300"
                  : "bg-teal-50 text-teal-500 dark:bg-teal-900/40 dark:text-teal-300"
              }`}
            >
              <CheckCircle2 size={26} />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {exam.title}
              </h3>

              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <span className="px-3 py-1 rounded-full border border-gray-300 dark:border-slate-600 text-xs font-semibold">
                  {exam.tag}
                </span>

                <span className="flex items-center gap-1">
                  <Calendar size={16} /> {exam.date}
                </span>

                <span className="flex items-center gap-1">
                  <Clock size={16} /> {exam.duration}
                </span>
              </div>
            </div>
          </div>

          <button className="px-6 py-2 rounded-xl bg-slate-700 dark:bg-slate-600 text-white font-semibold shadow-md hover:bg-slate-800 dark:hover:bg-slate-500 transition">
            Open Test
          </button>
        </div>
      ))}
    </div>
  );

  const renderHelp = () => (
    <div className="flex flex-col items-center justify-center mt-8 mb-16 text-center">
      <div className="w-16 h-16 rounded-full border-4 border-teal-500 flex items-center justify-center text-teal-500 mb-4">
        <HelpCircle size={30} />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
        Don&apos;t see your test here?
      </h3>
      <p className="text-gray-500 dark:text-gray-400 max-w-xl">
        Contact support or check your email for test invitations.
      </p>
    </div>
  );

  return (
    <section className="w-full max-w-6xl mx-auto mt-8">
      <div className="bg-white dark:bg-slate-950 rounded-3xl shadow-[0_18px_45px_rgba(15,118,110,0.2)] dark:shadow-[0_18px_45px_rgba(15,23,42,0.9)] overflow-hidden border border-teal-100 dark:border-teal-700">
        {/* Top header */}
        <div className="bg-teal-600 dark:bg-teal-700 px-8 py-5 text-white flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
            <BookOpen size={18} />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Your Exams</h2>
            <p className="text-sm text-teal-100 dark:text-teal-200">
              Manage your scheduled and completed exams
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-8 py-6">
          <div
            className="bg-gray-100 dark:bg-slate-800 flex overflow-hidden text-sm font-semibold text-gray-500 dark:text-gray-400
          rounded-full border border-gray-300 dark:border-slate-600"
          >
            {["current", "completed", "help"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 text-center transition ${
                  activeTab === tab
                    ? "bg-white dark:bg-slate-900 shadow-sm text-gray-800 dark:text-gray-100"
                    : "bg-transparent hover:text-gray-700 dark:hover:text-gray-200"
                }`}
              >
                {tab === "current"
                  ? "Current"
                  : tab === "completed"
                  ? "Completed"
                  : "Help"}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === "current" && renderCurrent()}
          {activeTab === "completed" && renderCompleted()}
          {activeTab === "help" && renderHelp()}
        </div>
      </div>
    </section>
  );
}
