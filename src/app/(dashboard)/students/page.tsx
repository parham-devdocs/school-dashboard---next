import TableSearch from "@/components/TableSearch";
import React from "react";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { role } from "@/lib/data";
import Link from "next/link";
import FormModal from "@/components/FormModal";
import { Class, Grade, Prisma, Student } from "@prisma/client";
import prisma from "../../../../prisma/prismaClient";
type StudentType =Student & { grade:Grade } &{class:Class}

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

const Row = (item: StudentType) => {
  return (
    <tr key={item.id} className="even:bg-purpleLight">
      {" "}
      {/* Added key prop */}
      <td className="flex gap-4 items-center ml-3 ">
        <Image
          src={item.img! || "/noavatar.jpeg"}
          alt={`${item.name}'s photo`} // Improved alt text
          width={30}
          height={30}
          className="rounded-full md:hidden xl:block w-10 h-10"
        />
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">{item.name}</h3>
          <h4>{item.email}</h4>
        </div>
      </td>
      <td className="hidden md:table-cell text-center">{item.id}</td>
      <td className="hidden md:table-cell text-center">{item.grade?.level}</td>
      <td className="hidden md:table-cell text-center">{item.class?.name}</td>
      <td className="hidden md:table-cell text-center">{item.phone}</td>
      <td className="hidden md:table-cell text-center">{item.address}</td>
      <td className="flex gap-2 items-center mb-5">
        <Link href={`/students/${item.id}`}>
          <button className="bg-sky rounded-full p-2">
            <Image src={"/view.png"} alt="View" width={15} height={15} />
          </button>
        </Link>
        {role.includes("admin") && <FormModal type="create" table="student" />}
      </td>
    </tr>
  );
};


const StudentsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { page, ...queryParams } = searchParams;
  const p = page ? parseInt(page) : 1;

  // Initialize the where clause dynamically
  const query: Prisma.StudentWhereInput = {};

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      switch (key) {
        case "teacherId":
          query.class = {
            lessons:{some:{classId:parseInt(value!)}}
          }
          break;
      }
    }
  }

  const [data, count] = await prisma.$transaction([
    prisma.student.findMany({
      where: query,
      include: { class:true,grade:true },
      take: 10,
      skip: 10 * (p - 1),
    }),
    prisma.student.count({ where: query }),
  ]);
  const totalPage = Math.ceil(count / 10);
  return (
    <div className=" bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className=" flex justify-between items-center">
        <h1 className=" font-semibold text-xl hidden md:block">All Students</h1>
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
            <FormModal table="student" type="create" />
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} data={data} renderRow={Row} />
      {/* PAGINATION  */}
      <Pagination totalPages={totalPage} p={p} />
    </div>
  );
};

export default StudentsPage;
