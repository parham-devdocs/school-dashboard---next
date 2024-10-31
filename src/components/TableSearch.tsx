import Image from "next/image";
import React from "react";

const TableSearch = () => {
  return (
    <div className=" w-60 h-10 border-2 border-gray-600 bg-transparent rounded-full flex items-center justify-between px-2 py-1">
      <Image src={"/search.png"} width={20} height={20} alt={"search-icon"} />
      <input
        placeholder="Serach ..."
        className=" w-48 outline-none text-gray-500"
      />
    </div>
  );
};

export default TableSearch;
