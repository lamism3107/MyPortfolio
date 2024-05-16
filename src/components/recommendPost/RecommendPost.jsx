"use client";
import React, { useContext } from "react";
import CategoryTag from "../categoryTag/CategoryTag";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";

function RecommendPost({ item }) {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={` outline-none flex  gap-4 justify-between items-center px-3 py-4 w-full  shadow-md rounded-lg ${
          theme === "dark" ? "bg-secondary" : "bg-primary"
        }`}
      >
        <div className="recommend-post__img w-[64px] h-[64px] rounded-full  overflow-hidden">
          <Image
            width={64}
            height={64}
            src={item.img}
            alt=""
            className="object-cover h-full"
          />
        </div>
        <div className="recommend-post__detail flex-col flex gap-3 w-[75%]">
          <div className="flex gap-2 items-center justify-between">
            <div className="recommend-post__category flex flex-wrap flex-1  gap-[6px]">
              <CategoryTag item={item.cat} size={"sm"} />
            </div>
            <span className="recommend-post__date text-[10px]  text-gray-400 flex-2">
              {(function formatDate(dateString) {
                const [year, month, day] = dateString.split("-");
                return `${day}-${month}-${year}`;
              })(item.createdAt.substring(0, 10))}
            </span>
          </div>
          <Link
            href={`/blog/${item.slug}`}
            className="recommentd-post__title text-[14px] font-semibold min-h-[50px] line-clamp-2 "
          >
            {item.title}
          </Link>
        </div>
      </div>
    </>
  );
}
export default RecommendPost;
