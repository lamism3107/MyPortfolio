"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import React, { useContext } from "react";

const CategoryTag = ({ name, size }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Link href={"/"} className="post__category flex gap-4 ">
        <span
          className={` rounded-full text-[12px]${
            theme === "dark"
              ? "  bg-slate-3 text-[#f1f1f1]"
              : "  bg-slate-400 text-[#111]"
          } ${
            size === "md" ? "px-3 py-2 text-[12px]" : "px-2 py-1 text-[10px]"
          }`}
          style={
            theme === "dark"
              ? {
                  backgroundColor: "#2d2b8c",
                  color: "#f2f2f2",
                }
              : {
                  backgroundColor: "#bbb",
                  color: "#fff",
                }
          }
        >
          {name}
        </span>
      </Link>
    </>
  );
};

export default CategoryTag;
