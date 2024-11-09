import TableSearch from "@/components/TableSearch";
import React from "react";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { role } from "@/lib/data";
import Link from "next/link";
import FormModal from "@/components/FormModal";
import { Class, Prisma, PrismaClient, Subject, Teacher } from "@prisma/client";
import prisma from "../../../../prisma/prismaClient";

type TeacherType = Teacher & { subjects: Subject[] } & { classes: Class[] };

const columns = [
  { header: "Info", accessor: "info" },
  {
    header: "Teacher Id",
    accessor: "teacherId",
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

const Row = (item: TeacherType) => {
  return (
    <tr className="even:bg-purpleLight">
      <td className="flex gap-4 items-center ml-3">
        <Image
          src={item.img || "/noavatar.jpeg"}
          alt={`${item.name} photo`}
          width={30}
          height={30}
          className="rounded-full md:hidden xl:block w-10 h-10"
        />
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">{item.username}</h3>
          <h4>{item.email}</h4>
        </div>
      </td>
      <td className="hidden md:table-cell text-center">{item.id}</td>
      <td className="hidden md:table-cell text-center">
        {item.classes.map((cls) => cls.name).join(",")}
      </td>
      <td className="hidden md:table-cell text-center">
        {item.subjects.length > 0
          ? item.subjects.map((subject) => subject.name).join(", ")
          : "no subject"}
      </td>
      <td className="hidden md:table-cell text-center">{item.phone}</td>
      <td className="hidden md:table-cell text-center">{item.address}</td>
      <td className="flex gap-2 items-center mb-5">
        <Link href={`/teachers/${item.id}`}>
          <button className="bg-sky rounded-full p-2">
            <Image src={"/view.png"} alt="view-icon" width={15} height={15} />
          </button>
        </Link>
        {role.includes("admin") && (
          <FormModal type="delete" table="teacher" id={item.id} data={item} />
        )}
      </td>
    </tr>
  );
};

const TeacherPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { page, ...queryParams } = searchParams;
  const p = page ? parseInt(page) : 1;

  // Initialize the where clause dynamically
const query:Prisma.TeacherWhereInput={}
if (queryParams) {
  for (const [key,value] of Object.entries(queryParams)) {
  switch (key) {
    case "classId":
      query.lessons = { some: { classId: parseInt(value!) } };
      break
    case "subjectId":
      query.subjects = { some: { id: parseInt(value!) } };
      break
    case "phone":
      query.phone = { equals: value! };
      break
    case "address":
      query.address = { equals: value! };
      break
    case "search":
      query.name = { contains: value!,mode:"insensitive" };
      break
    case "email":
      query.email = { equals: value! };
  
      break;
  }
    
  }
}
 
  const [data, count] = await prisma.$transaction([
    prisma.teacher.findMany({
      where: query,
      include: { subjects: true, classes: true },
      take: 10,
      skip: 10 * (p - 1),
    }),
    prisma.teacher.count({where:query}),
  ]);

  const totalPage = Math.ceil(count / 10);

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl hidden md:block">All Teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex gap-2">
            <button className="bg-yellow p-2 hover:bg-orange-300 transition-colors duration-300 rounded-full">
              <Image
                src={"/filter.png"}
                alt="filter-icon"
                width={15}
                height={15}
              />
            </button>
            <button className="bg-yellow p-2 hover:bg-orange-300 transition-colors duration-300 rounded-full">
              <Image src={"/sort.png"} alt="sort-icon" width={15} height={15} />
            </button>
            <FormModal table="teacher" type="create" />
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} data={data} renderRow={Row} />
      {/* PAGINATION */}
      <Pagination totalPages={totalPage} p={p} />
    </div>
  );
};

export default TeacherPage;
