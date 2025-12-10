import { useState } from "react";
import {
  Home,
  BookOpen,
  Award,
  User,
  HelpCircle,
  LogOut,
  GraduationCap,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

export const navItems = [
  { id: 1, label: "Home", icon: Home, targetId: "profile", active: true },
  { id: 2, label: "Profile", icon: User, targetId: "profile" },
  { id: 3, label: "My Exams", icon: BookOpen, targetId: "exams" },
  { id: 4, label: "My Scores", icon: Award, targetId: "scores" },
  { id: 5, label: "Help", icon: HelpCircle, targetId: "help" },
];

export default function Header() {
  const [activeNav, setActiveNav] = useState(1);

  // return (
  //   <header className="w-full bg-white border-b shadow-sm">
  //     <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
  //       {/* Left Logo */}
  //       <div className="flex items-center gap-3">
  //         <div className="bg-purple-500 p-3 rounded-xl  text-white">
  //           <GraduationCap size={18} />
  //         </div>
  //         <h1 className="text-2xl font-semibold text-purple-600">ExcelTest</h1>
  //       </div>
  //       <ThemeToggle />

  //       {/* Navigation */}
  //       <nav className="flex items-center gap-8 text-gray-700">
  //         {navItems.map(({ id, label, icon: Icon, active, targetId }) => (
  //           <div
  //             key={id}
  //             onClick={() => {
  //               setActiveNav(id);
  //               const el = document.getElementById(targetId);
  //               if (el) {
  //                 el.scrollIntoView({ behavior: "smooth" });
  //               }
  //             }}
  //             className={
  //               activeNav === id
  //                 ? "flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-xl text-purple-600 font-medium cursor-pointer"
  //                 : "flex items-center gap-2 hover:text-purple-600 cursor-pointer"
  //             }
  //           >
  //             <Icon size={18} />
  //             {label}
  //           </div>
  //         ))}
  //       </nav>

  //       {/* Logout */}
  //       <button className="flex items-center gap-2 text-red-600 font-medium hover:text-red-700">
  //         <LogOut size={20} />
  //         Logout
  //       </button>
  //     </div>
  //   </header>
  // );
  return (
    <header className="w-full bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-700 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Left Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-purple-500 dark:bg-purple-600 p-3 rounded-xl text-white">
            <GraduationCap size={18} />
          </div>
          <h1 className="text-2xl font-semibold text-purple-600 dark:text-purple-300">
            ExcelTest
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
          {navItems.map(({ id, label, icon: Icon, targetId }) => (
            <motion.button
              key={id}
              onClick={() => {
                setActiveNav(id);
                const el = document.getElementById(targetId);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="relative flex items-center"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
            >
              {/* Active pill background */}
              {activeNav === id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-xl bg-purple-100 dark:bg-purple-900/40"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}

              {/* Content */}
              <span
                className={`relative z-10 flex items-center gap-2 px-4 py-2 ${
                  activeNav === id
                    ? "text-purple-600 dark:text-purple-300 font-medium"
                    : "hover:text-purple-600 dark:hover:text-purple-300"
                }`}
              >
                <Icon size={18} />
                {label}
              </span>

              {/* Underline for active item */}
              {activeNav === id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-4 right-4 bottom-0 h-[2px] rounded-full bg-purple-500 dark:bg-purple-300"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </nav>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Logout */}
        <button className="flex items-center gap-2 text-red-600 dark:text-red-400 font-medium hover:text-red-700 dark:hover:text-red-300 transition">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </header>
  );
}
