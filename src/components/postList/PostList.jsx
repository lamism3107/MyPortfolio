"use client";
import React, { useContext } from "react";
import Image from "next/image";
import PostCard from "../postCard/PostCard";
import { ThemeContext } from "@/context/ThemeContext";
import { FiSearch } from "react-icons/fi";
import CategoryTag from "../categoryTag/CategoryTag";
import RecommendPost from "../recommendPost/RecommendPost";
import Pagination from "../pagination/Pagination";
import BlogSidebar from "../blogSidebar/BlogSidebar";

export function RecommentPost() {
  return <div></div>;
}

function PostList() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="postlist-container ">
      <h1 className="postlist-heading mt-14 mb-8 text-2xl font-bold">
        Bài viết gần đây
      </h1>
      <div className="flex gap-8 ">
        <div className="post w-[70%]  flex flex-col gap-[36px]">
          <PostCard />
          <PostCard />
          <PostCard />
          <Pagination />
        </div>

        <BlogSidebar />
      </div>
    </div>
  );
}
export default PostList;
