"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className=" flex items-center justify-between p-4">
      {/* SEARCH BAR  */}
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className=" hidden md:flex rounded-full border-gray-400 border-2 p-2 gap-2 ">
        <Image src={"/search.png"} alt="search-icon" width={22} height={20} />
        <input
          type=" text"
          placeholder="Search..."
          className="bg-transparent"
        />
      </motion.div>
      {/* ICONS */}
      <motion.div initial={{x:200,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1}} className=" flex gap-6 items-center">
        <div className=" bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src={"/message.png"} alt="message" width={20} height={20} />
        </div>
        <div className=" bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src={"/announcement.png"} alt="message" width={20} height={20} />
              </div>
              <div className=" flex flex-col">
                  <span className=" text-xs leading-3 font-medium">John Doe</span>
                  <span className=" text-[10px] text-gray-300 text-right">Admin</span>
              </div>
              <Image src={"/avatar.png"}  alt="avatar" width={36} height={36} className=" rounded-full"/> 
      </motion.div>
    </div>
  );
};

export default Navbar;
