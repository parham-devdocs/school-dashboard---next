import TableSearch from "@/components/TableSearch";
import React from "react";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
const colomns = [
  { header: "Info", accessor: "info" },
  {
    header: "Teacher Id",
    accessor: "taecherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {header:"Actions",accessor:"actions"}
];
const TeacherPage = () => {
  return (
    <div className=" bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className=" flex justify-between items-center">
        <h1 className=" font-semibold text-xl hidden md:block">All Teacher</h1>
        <div className=" flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <TableSearch />
          <button className=" bg-yellow p-2 hover:bg-orange-300 transition-colors duration-300 rounded-full">
            <Image
              src={"/filter.png"}
              alt="filter-icon"
              width={15}
              height={15}
            />
          </button>
          <button className=" bg-yellow p-2 hover:bg-orange-300 transition-colors duration-300 rounded-full">
            <Image src={"/sort.png"} alt="filter-icon" width={15} height={15} />
          </button>
          <button className=" bg-yellow p-2 hover:bg-orange-300 transition-colors duration-300 rounded-full">
            <Image src={"/plus.png"} alt="filter-icon" width={15} height={15} />
          </button>
        </div>
      </div>
      {/* LIST */}
      <Table columns={colomns} />
      {/* PAGINATION  */}
      <Pagination />
    </div>
  );
};

export default TeacherPage;
