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
        className={`py-2 px-3 rounded-lg w-max hover:bg-prime transition-all ease-out duration-150  disabled:brightness-75   ${
          theme === "dark"
            ? "bg-prime text-white hover:scale-105 transition-all duration-150 ease-out disabled:hover:bg-prime disabled:hover:scale-100"
            : "bg-black text-white disabled:hover:bg-black "
        }`}
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Trước
      </button>
      <button
        disabled={!hasNext}
        className={`py-2 px-3 rounded-lg w-max hover:bg-prime transition-all ease-out duration-150  disabled:brightness-75   ${
          theme === "dark"
            ? "bg-prime text-white hover:scale-105 transition-all duration-150 ease-out disabled:hover:bg-prime disabled:hover:scale-100"
            : "bg-black text-white disabled:hover:bg-black "
        }`}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Sau
      </button>
    </div>
  );
};

export default Pagination;
