import React from "react";

const Pagination = () => {
  return (
    <div className=" p-4 flex items-center justify-between text-gray-500">
      <button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-gray-600">
        Prev
          </button>
          <div className=" flex gap-2 items-center justify-between">
              <button className=" ">1</button>
              <button className=" px-2 rounded-sm bg-sky">2</button>
              <button className="">3</button>
              ...
              <button className=" ">10</button>
          </div>
      <button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-gray-600">
        Next
      </button>
    </div>
  );
};

export default Pagination;
