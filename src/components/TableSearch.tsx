"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TableSearch = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(window.location.search);
    params.set("search", searchValue);
    router.push(`${window.location.pathname}?${params}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-60 h-10 border-2 border-gray-600 bg-transparent rounded-full flex items-center justify-between px-2 py-1"
    >
      <button type="submit" aria-label="Search">
        <Image src={"/search.png"} width={20} height={20} alt={"search-icon"} />
      </button>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search ..."
        className="w-48 outline-none text-gray-500"
      />
    </form>
  );
};

export default TableSearch;
