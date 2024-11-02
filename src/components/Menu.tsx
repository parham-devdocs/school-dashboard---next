"use client"
const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/subject.png",
        label: "Subjects",
        href: "/subjects",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

import { role } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <motion.div className=" flex flex-col items-center md:items-start " initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
      <div className=" mt-2 mb-5">
        <Link
          href={"/"}
          className=" flex items-center gap-2 justify-center lg:justify-start p-4"
        >
          <Image src={"/logo.png"} alt="logo" width={32} height={32} />
          <span className=" hidden lg:block">ScholarlyHub</span>
        </Link>

        {menuItems.map((i) => {
          return (
            <div
              key={i.title}
              className=" flex flex-col   lg:ml-2 "
            >
              <span className=" my-2 hidden lg:block text-gray-400 font-light">
                {i.title}
              </span>
              {i.items.map((i) => {
                if (i.visible.includes(role)) {
                    return (
                      <div key={i.label} className=" w-full flex justify-center lg:justify-start  ">
                        <Link
                          href={i.href}
                          className=" flex gap-2 text-gray-500 hover:bg-skyLight transition-colors duration-300 rounded-md py-[6px] px-1 "
                        >
                          <Image
                            src={i.icon}
                            alt="item-icon"
                            width={24}
                            height={24}
                          />{" "}
                          <span className=" hidden lg:block"> {i.label} </span>
                        </Link>
                      </div>
                    );
                }
              
              })}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Menu;
