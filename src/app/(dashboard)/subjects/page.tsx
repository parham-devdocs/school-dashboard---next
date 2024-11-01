import TableSearch from "@/components/TableSearch";
import React from "react";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { role, subjectsData } from "@/lib/data";
import Link from "next/link";

interface Subject {
  id: number;
    name: string;
    teachers:string[]
 
}
const columns = [
  { header: "Subject Names", accessor: "name" },

  {
    header: "Teachers",
    accessor: "teachers",
   
  },
  { header: "Actions", accessor: "actions" },
];

const Row = ({
  id,

teachers,
    name,
  
 
}: Subject) => {
  return (
    <tr key={id} className="even:bg-purpleLight hover:bg-purple">
      {" "}
      {/* Added key prop */}
      <td className="flex gap-4 items-center ml-3 ">
              <p>{ name }</p>
      </td>
   
      <td className=" text-center">{teachers.join(",")}</td>
         
      <td className="flex gap-2 items-center mt-5 justify-center  ">
        <Link href={`/subjects/${id}`}>
          <button className="bg-sky rounded-full p-2">
            <Image src={"/view.png"} alt="View" width={15} height={15} />
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

const SubjectsPage = () => {
  return (
    <div className=" bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className=" flex justify-between items-center">
        <h1 className=" font-semibold text-xl hidden md:block">All Subjects</h1>
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
      <Table columns={columns} data={subjectsData} renderRow={Row} />
      {/* PAGINATION  */}
      <Pagination />
    </div>
  );
};

export default SubjectsPage;
