import React from "react";
import RecommendPost from "../recommendPost/RecommendPost";
import useSWR from "swr";
import fetcher from "@/app/fetcher/fetcher";

export default function RecommendedPostList() {
  const { data, error, isLoading } = useSWR(`/api/posts?page=1`, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div className="my-12">loading...</div>;
  const { posts } = data;
  return (
    <div className="recommend-post flex flex-col gap-3 mt-7">
      <label
        className="font-semibold text-xl w-full  mb-3"
        htmlFor="search-post"
      >
        Các bài viết được đề xuất
      </label>
      {posts.map((item) => (
        <RecommendPost key={item._id} item={item} />
      ))}
    </div>
  );
}
