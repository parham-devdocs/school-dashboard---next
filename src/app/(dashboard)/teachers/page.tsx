import TableSearch from "@/components/TableSearch";
import React from "react";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { role, teachersData } from "@/lib/data";
import Link from "next/link";
interface Teacher {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  subjects: string[];
  classes: string[];
  address: string;
  phone: string;
}
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
  { header: "Actions", accessor: "actions" },
];
const Row = ({
  id,
  teacherId,
  name,
  email,
  photo,
  phone,
  subjects,
  classes,
  address,
}: Teacher) => {
  return (
    <tr className=" even:bg-purpleLight ">
      <td className=" flex gap-4 items-center ml-3">
        <Image
          src={photo}
          alt={` ${name} photo`}
          width={30}
          height={30}
          className=" rounded-full md:hidden xl:block w-10 h-10"
        />
        <div className=" flex flex-col gap-2 ">
          <h3 className=" font-medium">{name}</h3>
          <h4>{email}</h4>
        </div>
      </td>
      <td className=" hidden md:table-cell text-center">{teacherId}</td>
      <td className=" hidden md:table-cell text-center">{classes.join(",")}</td>
      <td className=" hidden md:table-cell text-center">{subjects.join(",")}</td>
      <td className=" hidden md:table-cell text-center">{phone}</td>
      <td className=" hidden md:table-cell text-center">{address}</td>
      <td className=" flex gap-2 items-center mb-5">
        <Link href={`/teachers/${id}`}>
          {" "}
          <button className=" bg-sky rounded-full p-2">
            <Image src={"/view.png"} alt="view-icon" width={15} height={15} />
          </button>
        </Link>
        {role.includes("admin") && (
          <button className=" bg-purple rounded-full p-2">
            <Image src={"/delete.png"} alt="view-icon" width={15} height={15} />
          </button>
        )}
      </td>
    </tr>
  );
};

const TeacherPage = () => {
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
      <Table columns={colomns} data={teachersData} renderRow={Row} />
      {/* PAGINATION  */}
      <Pagination />
    </div>
  );
};

export default TeacherPage;
