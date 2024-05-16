"use client";
import React, { useContext } from "react";
import PostCard from "../postCard/PostCard";
import Pagination from "../pagination/Pagination";
import BlogSidebar from "../blogSidebar/BlogSidebar";
import useSWR from "swr";
import fetcher from "@/app/fetcher/fetcher";

function PostList({ page, cat, h1 }) {
  // const { theme } = useContext(ThemeContext);
  const { data, error, isLoading } = useSWR(
    `/api/posts?page=${page}&cat=${cat || ""}`,
    fetcher
  );

  // if (error) return <div>failed to load</div>;
  if (isLoading) return <div className="my-12">loading...</div>;
  const { posts, count } = data;

  const POST_PER_PAGE = 3;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <div className="postlist-container ">
      <h1 className="postlist-heading mt-14 mb-8 text-2xl font-bold">
        {h1 ? h1 : "Bài viết gần đây"}
      </h1>
      <div className="flex gap-8 ">
        <div className="post w-[70%]  flex flex-col gap-[36px]">
          {posts?.map((item) => (
            <PostCard item={item} key={item._id} />
          ))}

          <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
        </div>

        <BlogSidebar />
      </div>
    </div>
  );
}
export default PostList;
