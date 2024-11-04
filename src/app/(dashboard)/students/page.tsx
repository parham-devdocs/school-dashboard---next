import TableSearch from "@/components/TableSearch";
import React from "react";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { role, studentsData } from "@/lib/data";
import Link from "next/link";
import FormModal from "@/components/FormModal";

interface Student {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo?: string;
  grade: number;
  studentClass: string; // Changed from studentClass to class
  address: string;
  phone: string;
}
const columns = [
  { header: "Info", accessor: "info" },
  {
    header: "Student Id",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Class",
    accessor: "studentClass",
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
  { header: "Actions", accessor: "actions" },
];

const Row = ({
  id,
  studentId,
  name,
  email,
  photo,
  phone,
  grade,
  studentClass,
  address,
}: Student) => {
  return (
    <tr key={id} className="even:bg-purpleLight">
      {" "}
      {/* Added key prop */}
      <td className="flex gap-4 items-center ml-3 ">
        <Image
          src={photo}
          alt={`${name}'s photo`} // Improved alt text
          width={30}
          height={30}
          className="rounded-full md:hidden xl:block w-10 h-10"
        />
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">{name}</h3>
          <h4>{email}</h4>
        </div>
      </td>
      <td className="hidden md:table-cell text-center">{studentId}</td>
      <td className="hidden md:table-cell text-center">{grade}</td>
      <td className="hidden md:table-cell text-center">{studentClass}</td>
      <td className="hidden md:table-cell text-center">{phone}</td>
      <td className="hidden md:table-cell text-center">{address}</td>
      <td className="flex gap-2 items-center mb-5">
        <Link href={`/students/${id}`}>
          <button className="bg-sky rounded-full p-2">
            <Image src={"/view.png"} alt="View" width={15} height={15} />
          </button>
        </Link>
        {role.includes("admin") && <FormModal type="create" table="student"  />}
      </td>
    </tr>
  );
};


const StudentsPage = () => {
  return (
    <div className=" bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className=" flex justify-between items-center">
        <h1 className=" font-semibold text-xl hidden md:block">All Teacher</h1>
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
      <Table columns={columns} data={studentsData} renderRow={Row} />
      {/* PAGINATION  */}
      <Pagination />
    </div>
  );
};

export default StudentsPage;
