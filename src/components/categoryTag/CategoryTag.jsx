"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import React, { useContext } from "react";
import { motion } from "framer-motion";
const CategoryTag = ({ item, size }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Link
        href={`/blog/posts?cat=${item.slug}`}
        className="post__category flex gap-4 "
      >
        <motion.span
          className={` rounded-full text-[12px]${
            theme === "dark"
              ? "  bg-soft text-[#f1f1f1]"
              : "  bg-pink-200 text-[#111]"
          } ${
            size === "md" ? "px-3 py-2 text-[12px]" : "px-2 py-1 text-[10px]"
          } 
          }`}
        >
          {item?.title}
        </motion.span>
      </Link>
    </>
  );
};

export default CategoryTag;
