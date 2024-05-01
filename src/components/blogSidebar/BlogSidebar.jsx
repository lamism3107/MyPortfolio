"use client";
import React, { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import CategoryTag from "../categoryTag/CategoryTag";
import RecommendPost from "../recommendPost/RecommendPost";
import { ThemeContext } from "@/context/ThemeContext";
function BlogSidebar() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="sticky top-2  z-50 filter-box w-[30%] pl-5">
      {/* Tìm kiếm bài viết  */}
      <div className="flex flex-wrap">
        <label className="font-semibold text-xl my-3" htmlFor="search-post">
          Tìm kiếm bài viết
        </label>
        <div
          className={`outline-none flex px-3 py-2 w-full drop-shadow-md shadow-md rounded-lg ${
            theme === "dark" ? "bg-secondary" : "bg-primary"
          }`}
        >
          <FiSearch
            className=" text-primary w-6 h-6 z-50 text-gray-300 mr-2"
            style={{ zIndex: "50" }}
          />
          <input
            id="search-post"
            className={"bg-transparent outline-none w-full h-full"}
            type="text"
          />
        </div>
      </div>

      {/* Chủ đề đề xuất  */}
      <div className="flex flex-wrap mt-7">
        <label
          className="font-semibold text-xl w-full  mb-3"
          htmlFor="search-post"
        >
          Các chủ đề được đề xuất
        </label>
        <div
          className={` outline-none flex flex-wrap gap-3 px-3 py-4 w-full drop-shadow-md shadow-md rounded-lg ${
            theme === "dark" ? "bg-secondary" : "bg-primary"
          }`}
        >
          <CategoryTag name={"REACJT"} size="md" />
          <CategoryTag name={"TYPESCRIPT"} size="md" />
          <CategoryTag name={"NEXTJS"} size="md" />
        </div>
      </div>

      {/* Bài viết đề xuất  */}
      <div className="recommend-post flex flex-col gap-3 mt-7">
        <label
          className="font-semibold text-xl w-full  mb-3"
          htmlFor="search-post"
        >
          Các bài viết được đề xuất
        </label>
        <RecommendPost
          title="Loerem fđsdfádfdfdfsadfsadfsdfsadfád"
          thumbnail="/food.png"
          date="30.4.2024"
          category={[
            <CategoryTag key={"ấdfasd"} size={"sm"} name="REACT" />,
            <CategoryTag key={"ấdfassdfd"} size={"sm"} name="NEXTJS" />,
          ]}
        />
        <RecommendPost
          title="Loerem fđsdfádfdfdfsadfsadfsdfsadfád"
          thumbnail="/food.png"
          date="30.4.2024"
          category={[
            <CategoryTag key={"ấdfasd"} size={"sm"} name="REACT" />,
            <CategoryTag key={"ấdfassdfd"} size={"sm"} name="NEXTJS" />,
          ]}
        />
        <RecommendPost
          title="Loerem fđsdfádfdfdfsadfsadfsdfsadfád"
          thumbnail="/food.png"
          date="30.4.2024"
          category={[
            <CategoryTag key={"ấdfasd"} size={"sm"} name="REACT" />,
            <CategoryTag key={"ấdfassdfd"} size={"sm"} name="NEXTJS" />,
          ]}
        />
      </div>
    </div>
  );
}

export default BlogSidebar;
