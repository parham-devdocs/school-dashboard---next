import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "./eventCalendar.css";
import Calendar from "react-calendar";
import { motion } from "framer-motion";
import Image from "next/image";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const variants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM -2:00 PM",
    description: "Lorem ipsum dolor negro amet spadcio ratio ",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM -2:00 PM",
    description: "Lorem ipsum dolor negro amet spadcio ratio ",
  },

  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM -2:00 PM",
    description: "Lorem ipsum dolor negro amet spadcio ratio ",
  },
];
const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants}
      transition={{ duration: 3 }}
    >
      <Calendar onChange={onChange} value={value} className=" rounded-md p-2" />
      <div className=" flex flex-col gap-4 mt-6">
        <div className=" flex items-center justify-between">
          <h1>Events</h1>
          <Image src={"/moreDark.png"} alt="more-icon" width={20} height={20} />
        </div>
        {events.map((e) => (
          <div
            key={e.id}
            className=" p-4 border-zinc-200 border-2 mt-4 rounded-md flex flex-col gap-5"
          >
            <div className=" flex justify-between items-center ">
              {" "}
              <h1 className=" font-semibold text-lg">{e.title}</h1>
              <span className=" font-semibold">{e.time}</span>
            </div>
            <p className=" text-gray-500 text-sm ">{e.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default EventCalendar;
