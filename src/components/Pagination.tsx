"use client";
// import { useRouter } from "next/router";

import { useRouter } from "next/navigation";
import React from "react";

const Pagination = ({ totalPages, p }: { totalPages: number; p: number }) => {
  const router = useRouter();

  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <button
        onClick={() => router.push(`?page=${p - 1}`)}
        disabled={p <= 1}
        className="py-2 px-4 rounded-md bg-sky disabled:bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-gray-600"
      >
        Prev
      </button>
      <div className="flex gap-2 items-center justify-between">
        {Array.from({ length: totalPages }, (_, index) => {
          const btn = index + 1; // Create page numbers starting from 1
          return (
            <button
              onClick={() => router.push(`?page=${btn}`)}
              key={btn}
              className={`${btn === p ? "px-2 rounded-sm bg-sky" : ""}`}
            >
              {btn}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => router.push(`?page=${p + 1}`)}
        disabled={p >= totalPages}
        className="py-2 px-4 rounded-md bg-sky disabled:bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-gray-600"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
