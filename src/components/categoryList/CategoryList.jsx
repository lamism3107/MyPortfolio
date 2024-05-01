"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import CategoryCard from "../categoryCard/CategoryCard";
import "./category.css";
import { ThemeContext } from "@/context/ThemeContext";

const bgColorsLight = [
  "#E9E2FF",
  "#FAE2FF",
  "#FFE2E6",
  "#E2FFE9",
  "#E2F4FF",
  "#FFFFE2",
];
const bgColorsDark = ["#1b1a55"];

function CategoryList() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="category-container">
      <h1 className="category-heading mt-14 mb-8 text-2xl font-bold">
        Chủ đề bài viết
      </h1>
      <div className="categories flex flex-wrap justify-between gap-5">
        <CategoryCard
          bgColor={theme === "light" ? bgColorsLight[0] : bgColorsDark[0]}
          category="style"
        />
        <CategoryCard
          bgColor={theme === "light" ? bgColorsLight[1] : bgColorsDark[0]}
          category="fashion"
        />
        <CategoryCard
          bgColor={theme === "light" ? bgColorsLight[2] : bgColorsDark[0]}
          category="food"
        />
        <CategoryCard
          bgColor={theme === "light" ? bgColorsLight[3] : bgColorsDark[0]}
          category="culture"
        />
        <CategoryCard
          bgColor={theme === "light" ? bgColorsLight[4] : bgColorsDark[0]}
          category="travel"
        />
        <CategoryCard
          bgColor={theme === "light" ? bgColorsLight[5] : bgColorsDark[0]}
          category="coding"
        />
      </div>
    </div>
  );
}
export default CategoryList;
