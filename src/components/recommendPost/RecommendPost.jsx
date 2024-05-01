"use client";
import React, { useContext } from "react";
import CategoryTag from "../categoryTag/CategoryTag";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";

function RecommendPost({ category, title, thumbnail, date }) {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={` outline-none flex  gap-3 justify-between items-center px-3 py-4 w-full  shadow-md rounded-lg ${
          theme === "dark" ? "bg-secondary" : "bg-primary"
        }`}
      >
        <div className="recommend-post__img w-[64px] h-[64px] rounded-full  overflow-hidden">
          <img src={thumbnail} alt="" className="object-cover" />
        </div>
        <div className="recommend-post__detail flex-col flex gap-3 w-[75%]">
          <div className="flex gap-2 items-center justify-between">
            <div className="recommend-post__category flex flex-wrap flex-1  gap-[6px]">
              {category}
            </div>
            <span className="recommend-post__date text-[10px]  text-gray-400 flex-2">
              {date}
            </span>
          </div>
          <Link
            href={"/"}
            className="recommentd-post__title text-[14px] font-semibold min-h-[50px] line-clamp-2 "
          >
            {title}
          </Link>
        </div>
      </div>
    </>
  );
}
export default RecommendPost;
