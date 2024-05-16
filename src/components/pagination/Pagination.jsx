"use client";
import React, { useCallback, useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);

  return (
    <div className="pagination flex justify-between">
      <button
        className={`py-2 px-3 rounded-lg w-max hover:bg-prime transition-all ease-out duration-150 disabled:brightness-75 disabled:hover:bg-black  ${
          theme === "dark"
            ? "bg-prime text-white hover:scale-105 transition-all duration-150 ease-out"
            : "bg-black text-white"
        }`}
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Trước
      </button>
      <button
        disabled={!hasNext}
        // className="cursor-pointer py-2 px-4 rounded-lg w-max hover:brightness-75"
        className={`py-2 px-3 rounded-lg w-max hover:bg-prime transition-all ease-out duration-150  disabled:brightness-75 disabled:hover:bg-black   ${
          theme === "dark"
            ? "bg-prime text-white hover:scale-105 transition-all duration-150 ease-out"
            : "bg-black text-white"
        }`}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Sau
      </button>
    </div>
  );
};

export default Pagination;
