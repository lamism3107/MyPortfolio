"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import React, { useContext } from "react";
import "./featured.css";
import Link from "next/link";
function Featured() {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <div className="featured-container ">
      <h1 className="featured__heading text-5xl leading-[64px] text-center">
        <b>
          Chào bạn, tôi là <span className={` text-prime `}>LamDev!</span>{" "}
        </b>
        <br />
        Chào mừng bạn đến với trang Blog của tôi
      </h1>

      <div
        className={`featured__post mt-16 flex items-center gap-12 shadow-md p-6 rounded-xl ${
          theme === "dark" ? "bg-secondary" : "bg-primary"
        }`}
      >
        <div
          className={`featured-post__img flex justify-center flex-1 h-[500px] relative `}
        >
          <Image
            src="/my-picture.jpg"
            alt=""
            className="object-cover h-full rounded-lg"
            objectFit="cover"
            layout="responsive"
            width={200}
            height={200}
          />
        </div>
        <div className="featured-post__content flex-1 flex flex-col gap-5">
          <h1 className="featured-post__title text-2xl font-semibold text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            consectetur itaque rerum fugiat dignissimos
          </h1>
          <p className="featured-post__desc text-lg f  ont-light text-primary text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis consectetur amet nobis, vero, debitis omnis delectus
            provident, eius tenetur at est suscipit reiciendis odio voluptates
            id aliquid error repellat vitae!
          </p>
          <Link
            href={"/"}
            className="py-3 px-4 rounded-lg w-max hover:brightness-75 "
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
    </div>
  );
}

export default Featured;
