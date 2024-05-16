import fetcher from "@/app/fetcher/fetcher";
import CategoryList from "@/components/categoryList/CategoryList";
import PostList from "@/components/postList/PostList";
import React from "react";
import useSWR from "swr";

function Posts({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  //   const { data, error, isLoading } = useSWR(
  //     `/api/posts?page=${page}&cat=${cat || ""}`,
  //     fetcher
  //   );

  //   if (error) return <div>failed to load</div>;
  //   if (isLoading) return <div className="my-12">loading...</div>;
  //   console.log(data);
  return (
    <div className="mt-[120px]">
      {console.log("hello")}
      <div>
        <PostList page={page} cat={cat} h1={`Bài viết chủ đề ${cat}`} />
      </div>
    </div>
  );
}
export default Posts;
