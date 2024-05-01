import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../categoryList/category.css";
function CategoryCard({ category, bgColor }) {
  return (
    <>
      <Link
        style={{ backgroundColor: `${bgColor}` }}
        href={`/blogs?category=${category}`}
        className="category flex items-center gap-2 capitalize w-[15%] h-[80px] justify-center rounded-xl"
      >
        <Image
          src={`/${category}.png`}
          alt=""
          width={32}
          height={32}
          className="w-12 h-12 rounded-full "
        />

        <h3 className="drop-shadow-glow font-semibold">{category}</h3>
      </Link>
    </>
  );
}
export default CategoryCard;
