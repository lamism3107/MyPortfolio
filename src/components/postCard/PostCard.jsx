"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import CategoryTag from "../categoryTag/CategoryTag";

function PostCard({ item }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`post  flex items-center gap-[50px] p-6 drop-shadow-md shadow-sm rounded-xl ${
        theme === "dark" ? "bg-secondary" : "bg-primary"
      }`}
    >
      <div className="post__img flex-1 h-[350px] w-[350px] relative">
        {item?.img && (
          <Image
            src={item.img}
            alt="post-card img"
            fill
            className="rounded-lg "
          />
        )}
      </div>
      <div className="post__content flex flex-col gap-[16px] flex-1">
        <div className="post__info flex flex-col">
          <span
            className={`post__date mb-2 text-[14px] ${
              theme === "light" ? "text-gray-400" : "text-gray-300"
            }`}
          >
            <span>Ngày đăng: </span>
            {(function formatDate(dateString) {
              const [year, month, day] = dateString.split("-");
              return `${day}-${month}-${year}`;
            })(item.createdAt.substring(0, 10))}
          </span>
          <CategoryTag item={item.cat} size="md" />
        </div>

        <Link href={`/blog/${item.slug}`}>
          <h1 className="post__title font-bold text-2xl hover:text-prime transition-all ease-out duration-200">
            {item.title}
          </h1>
        </Link>
        <p className="post__desc">{item.desc}</p>
        <Link
          // whileHover={{ scale: `1.1` }}
          href={`/blog/${item.slug}`}
          className={`py-2 px-3 rounded-lg w-max hover:bg-prime transition-all ease-out duration-150 ${
            theme === "dark"
              ? "bg-prime text-white hover:scale-105 transition-all duration-150 ease-out"
              : "bg-black text-white"
          }`}
        >
          Xem thêm
        </Link>
      </div>
    </div>
  );
}
export default PostCard;
