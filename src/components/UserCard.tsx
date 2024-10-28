"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
const UserCard = ({ type }: { type: string }) => {
  return (
    <motion.div
      className="rounded-lg odd:bg-purple even:bg-yellow p-4 flex-1 min-w-[130px]"
          variants={listItem}
          transition={{duration:.3}}
    >
      <div className=" flex justify-between items-center">
        <span className=" text-10px bg-white px-2 py-1 rounded-full text-green-600">2024/25</span>
        <Image src={"/more.png"} alt="more-icon" width={20} height={20} />
      </div>
      <h1 className=" text-2xl font-semibold my-4">1,226</h1>
      <h1 className=" capitalize text-sm font-medium text-gray-700">{type}s</h1>
    </motion.div>
  );
};

export default UserCard;
