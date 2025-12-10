import { User } from "lucide-react";
import { motion } from "framer-motion";

export default function StudentProfile({ student }) {
  return (
    <section className="w-full max-w-6xl mx-auto mt-6">
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-[0_18px_45px_rgba(99,102,241,0.18)] dark:shadow-[0_18px_45px_rgba(15,23,42,0.7)] overflow-hidden">
        {/* Top header bar */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 dark:from-purple-600 dark:to-indigo-700 px-8 py-4 flex items-center gap-3 text-white">
          <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
            <User size={18} />
          </div>
          <h2 className="text-lg font-semibold">Student Profile</h2>
        </div>

        {/* Content */}
        <div className="px-8 py-8 flex items-center justify-between gap-10">
          <div className="flex items-center gap-8">
            {/* Avatar */}
            <div className="w-28 h-28 rounded-full border-[6px] border-purple-100 dark:border-purple-500 flex items-center justify-center bg-purple-50 dark:bg-purple-900/40">
              <motion.img
                src="/avatar.webp"
                alt="User Avatar"
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.98 }}
              />
            </div>

            {/* Name & Phone */}
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  Full Name
                </p>
                <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {student.fullName}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  Phone
                </p>
                <p className="text-base text-gray-800 dark:text-gray-200">
                  {student.phone}
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex items-start justify-between gap-10">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  Email
                </p>
                <p className="text-base text-gray-900 dark:text-gray-100">
                  {student.email}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  Location
                </p>
                <p className="text-base text-gray-900 dark:text-gray-100">
                  {student.location}
                </p>
              </div>
            </div>

            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 dark:from-purple-400 dark:to-indigo-400 text-white font-semibold shadow-md hover:shadow-lg hover:opacity-95 transition">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
