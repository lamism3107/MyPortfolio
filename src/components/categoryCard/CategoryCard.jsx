import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import "../categoryList/category.css";
import useSWR from "swr";
import fetcher from "@/app/fetcher/fetcher";
import { ThemeContext } from "@/context/ThemeContext";

function CategoryCard({ item }) {
  const { theme } = useContext(ThemeContext);
  return (
    <Link
      href={`/blog/posts?cat=${item.slug}`}
      className={`category flex items-center gap-2 capitalize w-[15%] h-[80px] shadow-md  justify-center rounded-xl ${
        theme === "dark" ? "bg-secondary" : "bg-primary"
      }`}
    >
      {item?.img && (
        <Image
          src={item?.img}
          alt=""
          width={32}
          height={32}
          className="w-12 h-12 rounded-full "
        />
      )}

      <h3 className="drop-shadow-glow font-semibold">{item.title}</h3>
    </Link>
  );
}
export default CategoryCard;
