"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";
import "./themeToggle.css";
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
function ThemeToggle() {
  const { theme, handleToggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={`${
        theme === "light"
          ? "w-10 h-5 rounded-[50px] flex bg-[#0f172a] items-center justify-between relative"
          : "w-10 h-5 rounded-[50px] flex bg-white items-center justify-between relative"
      }`}
      onClick={() => handleToggleTheme()}
    >
      <FaMoon className="w-[14px] h-[14px] text-white ml-[2px]" />
      <motion.div
        layout
        transition={spring}
        className="switch w-4 h-4 rounded-full absolute "
        style={
          theme === "dark"
            ? {
                left: 2,
                backgroundColor: "var(--primeColor)",
                transition: "all ease-out 0.3s",
              }
            : {
                right: 2,
                backgroundColor: "#fff",
                transition: "all ease-out 0.3s",
              }
        }
      ></motion.div>
      <FaSun className="w-[14px] h-[14px] text-yellow-500 mr-[2px]" />
    </div>
  );
}
export default ThemeToggle;
