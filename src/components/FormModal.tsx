"use client";
import Image from "next/image";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
const TeacherForm=dynamic(()=>import("./forms/TeacherForm"),{loading:()=><h1>Loading...</h1>})
const StudentForm =dynamic( ()=>import("./forms/studentForm"),{loading:()=><h1>Loading...</h1>} )
const Form = ({ type, onCloseHandler, id, table,data }: { type: "create" | "delete" | "update",data:any; table: string; onCloseHandler: (state: boolean) => void; id?: number }) => {
  if (type === "delete" && id) {
    return (
      <form className="w-full h-full bg-transparent flex flex-col items-center gap-2" onSubmit={(e) => e.preventDefault()}>
        <h1 className="font-medium">Are you sure you want to delete this {table}?</h1>
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-red-700 rounded-md px-6 py-2 text-white"
            onClick={() => {
              // Add delete logic here
              // For example: deleteItem(id);
              onCloseHandler(false);
            }}
          >
            Delete
          </button>
          <button
            type="button"
            className="bg-red-700 rounded-md px-6 py-2 text-white"
            onClick={() => onCloseHandler(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }

  if (type === "create") {
    if (table==="teacher") {
          return <TeacherForm type="create" data={data} />;

    }
    if (table==="student") {
      return <StudentForm type="create" data={data}/>
      

    }
    else{
      return <h1>Form Not Found</h1>
    }
  }


  return null;
};

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const [open, setOpen] = useState(false);
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-sky"
      : type === "update"
      ? "bg-yellow"
      : "bg-purple";

  return (
    <div className="relative">
      <button
        className={` ${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="update icon" width={16} height={16} />
      </button>
      {open && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-65 z-50">
          <div className="bg-white p-5 rounded shadow-md relative  w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[50%]">
            <Form
              type={type}
              onCloseHandler={setOpen}
              id={id}
              table={table}
              data={data}
            />
            <button
              className=" absolute right-2 top-2"
              onClick={() => setOpen(false)}
            >
              <Image
                src={"/close.png"}
                width={14}
                height={14}
                alt="close- icon"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormModal;
