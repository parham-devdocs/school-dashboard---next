import TableSearch from "@/components/TableSearch";
import React from "react";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { role, eventsData } from "@/lib/data";
import Link from "next/link";

interface Event {
  id: number;
  title: string;
  class: string;
    date: string;
    startTime: string
    endTime:string
}
const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
  
  },

  {
    header: "Start Time",
    accessor: "startDate",
    className: "hidden lg:table-cell",
  },
  {
    header: "End Time",
    accessor: "endDate",
    className: "hidden lg:table-cell",
  },
  { header: "Actions", accessor: "actions" },
];

const Row = (item: Event) => {
  return (
    <tr key={item.id} className="even:bg-purpleLight hover:bg-purple">
      <td className=" text-center">{item.title}</td>

      <td className="hidden md:table-cell text-center">{item.class}</td>
      <td className=" text-center ml-3 ">{item.date}</td>
      <td className="hidden lg:table-cell text-center">{item.startTime}</td>
      <td className="hidden lg:table-cell text-center">{item.endTime}</td>
      <td className="flex gap-2 items-center mt-5 justify-center my-3  ">
        <Link href={`/exams/${item.id}`}>
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

const EventsPage = () => {
  return (
    <div className=" bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className=" flex justify-between items-center">
        <h1 className=" font-semibold text-xl hidden md:block">All Events</h1>
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
      <Table columns={columns} data={eventsData} renderRow={Row} />
      {/* PAGINATION  */}
      <Pagination />
    </div>
  );
};

export default EventsPage;
