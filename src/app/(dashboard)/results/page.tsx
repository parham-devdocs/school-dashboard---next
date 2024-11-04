import TableSearch from "@/components/TableSearch";
import React from "react";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { role, resultsData } from "@/lib/data";
import Link from "next/link";
import FormModal from "@/components/FormModal";

interface Exam {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  score: number;
  type: string;
  date: string;
}
const columns = [
  {
    header: "Subject Name",
    accessor: "subject",
    className: "hidden lg:table-cell",
  },
  {
    header: "Student",
    accessor: "student",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden lg:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden lg:table-cell",
  },

  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Type",
    accessor: "type",
    className: "hidden lg:table-cell",
  },
  {
    header: "Score",
    accessor: "score",
  },

  { header: "Actions", accessor: "actions" },
];

const Row = (item: Exam) => {
  return (
    <tr key={item.id} className="even:bg-purpleLight hover:bg-purple">
      <td className=" text-center">{item.student}</td>

      <td className="hidden lg:table-cell text-center">{item.subject}</td>
      <td className="hidden lg:table-cell text-center ml-3 ">{item.class}</td>
      <td className="hidden lg:table-cell text-center">{item.teacher}</td>

      <td className="hidden md:table-cell text-center">{item.date}</td>
      <td className="hidden lg:table-cell text-center">{item.type}</td>

      <td className=" text-center">{item.score}</td>

      <td className="flex gap-2 items-center mt-5 justify-center  ">
        <Link href={`/exams/${item.id}`}>
          <button className="bg-sky rounded-full p-2">
            <Image src={"/view.png"} alt="View" width={15} height={15} />
          </button>
        </Link>
        {role.includes("admin") && (
          <FormModal id={item.id} table="result" type="delete"/>
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
      <Table columns={columns} data={resultsData} renderRow={Row} />
      {/* PAGINATION  */}
      <Pagination />
    </div>
  );
};

export default ParentsPage;
