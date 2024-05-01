import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import CardList from "@/components/postList/PostList";

import React from "react";

function Blog() {
  return (
    <div className="mt-[120px]">
      <Featured />
      <CategoryList />
      <div>
        <CardList />
      </div>
    </div>
  );
}
export default Blog;
