"use client"
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
      <motion.div
        className=" w-2/3 flex flex-wrap gap-4 justify-between"
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
      {/* Right */}
      <div className=" w-1/3">r</div>
    </div>
  );
};

export default AdminPage;
