"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import CategoryTag from "../categoryTag/CategoryTag";

function PostCard() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`post  flex items-center gap-[50px] p-6 drop-shadow-md shadow-md rounded-xl ${
        theme === "dark" ? "bg-secondary" : "bg-primary"
      }`}
    >
      <div className="post__img flex-1 h-[350px] w-[350px] relative">
        <Image src="/p1.jpeg" alt="" fill className="rounded-lg" />
      </div>
      <div className="post__content flex flex-col gap-[16px] flex-1">
        <div className="post__info flex flex-col">
          <span
            className={`post__date mb-2 text-[14px] ${
              theme === "light" ? "text-gray-400" : "text-gray-300"
            }`}
          >
            <span>Ngày đăng: </span>
            30.04.2024
          </span>
          <CategoryTag name={"REACTJS"} size="md" />
        </div>

        <Link href="/">
          <h1 className="post__title font-bold text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h1>
        </Link>
        <p className="post__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nobis
          in ipsum itaque soluta? Libero, cum? Porro ducimus magnam non, quam
          accusantium veniam perspiciatis sed soluta. Temporibus at sint
          repellat?
        </p>
        <Link
          href="/"
          className="py-2 px-3 rounded-lg w-max hover:brightness-75"
          style={
            theme === "dark"
              ? {
                  backgroundColor: "var(--primeColor)",
                  color: "#fff",
                }
              : {
                  backgroundColor: "#0f172a",
                  color: "#fff",
                }
          }
        >
          Xem thêm
        </Link>
      </div>
    </div>
  );
}
export default PostCard;
