import TableSearch from "@/components/TableSearch";
import React from "react";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { role, announcementsData } from "@/lib/data";
import Link from "next/link";
import FormModal from "@/components/FormModal";

interface Announcement {
  id: number;
  title: string;
  class: string;
  date: string;
}
const columns = [
  {
    header: "Title",
    accessor: "title",
    className: " text-left pl-7",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden lg:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
  },
  { header: "Actions", accessor: "actions" },
];

const Row = (item: Announcement) => {
  return (
    <tr key={item.id} className="even:bg-purpleLight hover:bg-purple">
      <td>{item.title}</td>

      <td className="hidden lg:table-cell text-center ml-3 ">{item.class}</td>

      <td className=" text-center">{item.date}</td>

      <td className="flex gap-2 items-center mt-5 justify-center  ">
      <FormModal data={{id:item.id,title:item.title,class:item.class,date:item.date}} table="announcement" type="update"/>
        {role.includes("admin") && (
        <FormModal id={item.id} table="announcement" type="delete"/>
        )}
      </td>
    </tr>
  );
};

const AnnouncementsPage = () => {
  return (
    <div className=" bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className=" flex justify-between items-center">
        <h1 className=" font-semibold text-xl hidden md:block">All Results</h1>
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
           <FormModal table="announcement" type="create" />
            
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} data={announcementsData} renderRow={Row} />
      {/* PAGINATION  */}
      <Pagination />
    </div>
  );
};

export default AnnouncementsPage;
