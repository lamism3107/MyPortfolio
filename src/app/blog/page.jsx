import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import PostList from "@/components/postList/PostList";

import React from "react";

function Blog({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className="mt-[120px]">
      <Featured />
      <CategoryList />
      <div>
        <PostList page={page} cat={cat} />
      </div>
    </div>
  );
}
export default Blog;
