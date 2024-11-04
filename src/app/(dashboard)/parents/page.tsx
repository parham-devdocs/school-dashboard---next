import TableSearch from "@/components/TableSearch";
import React from "react";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { role, parentsData } from "@/lib/data";
import Link from "next/link";
import FormModal from "@/components/FormModal";

interface Parent {
  id: number;
  parentId: string;
  name: string;
  email?: string;
  students: string[];
  address: string;
  phone?: string;
}
const columns = [
  { header: "Info", accessor: "info" },

  {
    header: "Phone",
    accessor: "phone",
    className: "hidden md:table-cell",
  },
  {
    header: "Students",
    accessor: "students",
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

  students,
  name,
  email,
  phone,

  address,
}: Parent) => {
  return (
    <tr key={id} className="even:bg-purpleLight hover:bg-purple">
      {" "}
      {/* Added key prop */}
      <td className="flex gap-4 items-center ml-3 ">
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">{name}</h3>
          <h4>{email && email}</h4>
        </div>
      </td>
      <td className="hidden md:table-cell text-center">{students.join(",")}</td>
      <td className="hidden md:table-cell text-center">{phone}</td>
      <td className="hidden md:table-cell text-center">{address}</td>
      <td className="flex gap-2 items-center mt-5 justify-center  ">
      <FormModal table="parent" type="update" data={{id,students,name,email,phone,address}}/>
        {role.includes("admin") && (
          <FormModal table="parent" type="delete" id={id} />
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
        <h1 className=" font-semibold text-xl hidden md:block">All Parents</h1>
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
      <Table columns={columns} data={parentsData} renderRow={Row} />
      {/* PAGINATION  */}
      <Pagination />
    </div>
  );
};

export default ParentsPage;
