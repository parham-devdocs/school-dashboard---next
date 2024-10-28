"use client"
import RadialChart from "@/components/radialChart";
import UserCard from "@/components/UserCard";
import { motion } from "framer-motion";
import React from "react";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      
    },
  },
};

const AdminPage = () => {
  return (
    <div className=" p-4 gap-4 flex flex-col md:flex-row">
      {/* Left */}
      <div className=" w-full lg:w-2/3 space-y-4">
      <motion.div
        className=" flex flex-wrap gap-4 justify-between"
        variants={container}
        initial="hidden"
        animate="show"
        transition={{duration:0.5}}
      >
        
        {/* USER CARDS */}
        <UserCard type="student" />
        <UserCard type="teacher" />
        <UserCard type="parent" />
        <UserCard type="staff" />
        </motion.div>
        {/* MIDDLE CHARTS */}
        <div className=" flex gap-4 flex-col lg:flex-row">
          {/* RADIAL CHART */}
          <div className=" w-full lg:w-1/3 h-[450px]"> <RadialChart /></div>
          {/* ATTENDANCE CHART */}
         <div className=" w-full lg:w-2/3 h-[450px]"></div>
        </div>
        {/* BOTTOM CHART */}
        </div>
      {/* Right */}
      <div className=" w-1/3">r</div>
    </div>
  );
};

export default AdminPage;
