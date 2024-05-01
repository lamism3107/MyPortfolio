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
        className=" cursor-pointer py-2 px-4 rounded-lg w-max hover:brightness-75"
        style={
          theme === "dark"
            ? {
                backgroundColor: "var(--primeColor)",
                color: "#fff",
              }
            : {
                backgroundColor: "#0f172a",
                color: "#fff",
              }
        }
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Trước
      </button>
      <button
        disabled={!hasNext}
        className="cursor-pointer py-2 px-4 rounded-lg w-max hover:brightness-75"
        style={
          theme === "dark"
            ? {
                backgroundColor: "var(--primeColor)",
                color: "#fff",
              }
            : {
                backgroundColor: "#0f172a",
                color: "#fff",
              }
        }
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Sau
      </button>
    </div>
  );
};

export default Pagination;
