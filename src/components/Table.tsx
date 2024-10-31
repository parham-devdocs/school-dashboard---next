import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Column {
  header: string; // Corrected from "haeder" to "header"
  accessor: string;
  className?: string; // Optional property
}


const Table = ({ columns,data,renderRow }: { columns: Column[],data:any,renderRow:(data:any)=>React.ReactNode }) => {
  return (
    <div>
      <table className=" w-full mt-4 px-3">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.accessor} className={`${col.className} ${col.accessor==="info" && " text-left"}`}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody >
          {data.map((teacher) => (
            renderRow(teacher)
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
