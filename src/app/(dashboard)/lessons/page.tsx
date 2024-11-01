import TableSearch from "@/components/TableSearch";
import React from "react";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { role, lessonsData } from "@/lib/data";
import Link from "next/link";

interface Lesson {
  id: number;
  subject: string;
  class: string;
  teacher: string;
}
const columns = [
  { header: "Subject Name", accessor: "subject" },

  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden lg:table-cell",
  },

  { header: "Actions", accessor: "actions" },
];

const Row = (item: Lesson) => {
  return (
    <tr key={item.id} className="even:bg-purpleLight hover:bg-purple">
      {" "}
      {/* Added key prop */}
      <td className=" text-center gap-4 items-center ml-3 ">{item.class}</td>
      <td className=" text-center">{item.subject}</td>
      <td className="hidden lg:flex items-center justify-center  text-center">
        {item.teacher}
      </td>
      <td className=" space-x-1 text-center pt-2 pb-2  ">
        <Link href={`/lesson/${item.id}`}>
          <button className="bg-sky rounded-full p-2">
            <Image src={"/edit.png"} alt="View" width={15} height={15} />
          </button>
        </Link>
        {role.includes("admin") && (
          <button className="bg-purple rounded-full p-2">
            <Image src={"/delete.png"} alt="Delete" width={15} height={15} />
          </button>
        )}
      </td>
    </tr>
  );
};

const ParentsPage = () => {
  return (
    <div className=" bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className=" flex justify-between items-center">
        <h1 className=" font-semibold text-xl hidden md:block">All Lessons</h1>
        <div className=" flex flex-col  md:flex-row items-center gap-4  w-full md:w-auto">
          <TableSearch />
          <div className=" flex gap-2">
            <button className=" bg-yellow p-2 hover:bg-orange-300 transition-colors duration-300 rounded-full">
              <Image
                src={"/filter.png"}
                alt="filter-icon"
                width={15}
                height={15}
              />
            </button>
            <button className=" bg-yellow p-2 hover:bg-orange-300 transition-colors duration-300 rounded-full">
              <Image
                src={"/sort.png"}
                alt="filter-icon"
                width={15}
                height={15}
              />
            </button>
            <button className=" bg-yellow p-2 hover:bg-orange-300 transition-colors duration-300 rounded-full">
              <Image
                src={"/plus.png"}
                alt="filter-icon"
                width={15}
                height={15}
              />
            </button>
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} data={lessonsData} renderRow={Row} />
      {/* PAGINATION  */}
      <Pagination />
    </div>
  );
};

export default ParentsPage;
