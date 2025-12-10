import { HelpCircle } from "lucide-react";

export default function HelpSupport() {
  return (
    <section className="w-full max-w-6xl mx-auto mt-8">
      <div className="bg-white dark:bg-slate-950 rounded-3xl shadow-[0_18px_45px_rgba(59,130,246,0.18)] dark:shadow-[0_18px_45px_rgba(15,23,42,0.9)] border border-blue-200 dark:border-blue-700 overflow-hidden">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 px-8 py-5 text-white flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <HelpCircle size={18} />
          </div>
          <h2 className="text-lg font-semibold">Help & Support</h2>
        </div>

        {/* Body Section */}
        <div className="flex flex-col items-center justify-center py-10 text-center">
          {/* Icon */}
          <div className="w-20 h-20 border-4 border-blue-400 dark:border-blue-500 rounded-full flex items-center justify-center text-blue-500 dark:text-blue-300 mb-6">
            <HelpCircle size={40} />
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Need Assistance?
          </h3>

          {/* Subtitle */}
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Our support team is here to help you succeed
          </p>

          {/* Button */}
          <button className="px-6 py-2 rounded-xl bg-blue-600 dark:bg-blue-500 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 dark:hover:bg-blue-400 transition">
            Go to Help Center
          </button>
        </div>
      </div>
    </section>
  );
}
