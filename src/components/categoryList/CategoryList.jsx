"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import CategoryCard from "../categoryCard/CategoryCard";
import "./category.css";
import { ThemeContext } from "@/context/ThemeContext";
import useSWR from "swr";
import fetcher from "@/app/fetcher/fetcher";

function CategoryList() {
  const { theme } = useContext(ThemeContext);
  const { data, error, isLoading } = useSWR("/api/categories", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div className="my-12">loading...</div>;
  return (
    <div className="category-container">
      <h1 className="category-heading mt-14 mb-8 text-2xl font-bold">
        Chủ đề bài viết
      </h1>
      <div className="categories flex flex-wrap justify-between gap-5">
        {data.map((item) => (
          <CategoryCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
export default CategoryList;
