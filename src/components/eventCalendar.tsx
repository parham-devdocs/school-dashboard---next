import React, { useState } from 'react'
import "react-calendar/dist/Calendar.css";
import "./eventCalendar.css";
import Calendar from "react-calendar";
import { motion } from 'framer-motion';

   type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
   const variants={hidden:{opacity:0},visible:{opacity:1}}
const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  



  return (
    <motion.div initial="hidden" whileInView="visible" variants={variants} transition={{duration:3}} >
      <Calendar  onChange={onChange} value={value}className=" rounded-md p-2" />
    </motion.div>
  );
}

export default EventCalendar
