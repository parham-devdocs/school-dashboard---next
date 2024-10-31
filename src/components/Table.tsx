import { role, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Column {
  header: string; // Corrected from "haeder" to "header"
  accessor: string;
  className?: string; // Optional property
}
interface Teacher {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  subjects: string[];
  classes: string[];
  address: string;
  phone:string
}
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
    <tr>
      <td className=" flex gap-4 items-center">
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
      <td className=" hidden md:table-cell">{teacherId}</td>
      <td className=" hidden md:table-cell">{classes.join(",")}</td>
      <td className=" hidden md:table-cell">{subjects.join(",")}</td>
      <td className=" hidden md:table-cell">{phone}</td>
      <td className=" hidden md:table-cell">{address}</td>
      <td className=" flex gap-2 items-center">
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
const Table = ({ columns }: { columns: Column[] }) => {
  return (
    <div>
      <table className=" w-full mt-4">
        <thead>
          <tr >
            {columns.map((col) => (
              <th key={col.accessor} className={col.className}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {teachersData.map((teacher) => (
            <Row
              key={teacher.id}
              id={teacher.id}
              photo={teacher.photo}
              subjects={teacher.subjects}
              classes={teacher.classes}
              teacherId={teacher.teacherId}
              address={teacher.address}
              name={teacher.name}
              email={teacher.email}
              phone={teacher.phone}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
