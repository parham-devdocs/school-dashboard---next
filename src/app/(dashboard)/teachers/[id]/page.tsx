import SmallCard from "@/components/SmallCard";
import Image from "next/image";
import React from "react";
import EventCalendar from "@/components/BigCalendar"
import Announcements from "@/components/Announcements.tsx"
import Link from "next/link";
const SingleTeacherPage = () => {
  return (
    <div className=" flex-1 flex p-4 flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className=" w-full xl:w-2/3 flex flex-wrap gap-2">
        {/* TOP  */}
        <div className=" flex flex-col lg:flex-row min-h-40 gap-4">
          {/* USER INFO CARD */}
          <div className=" w-full lg:w-1/2 p-3 bg-sky rounded-md flex-1 flex gap-4">
            <div className=" w-1/4 ">
              <Image
                src={"/teacherPresonalPhoto.jpeg"}
                width={144}
                height={144}
                className=" rounded-full"
                alt="personal photo"
              />
            </div>
            <div className=" w-3/4">
              <h1 className=" font-bold text-xl">Dean Guerro</h1>
              <p className=" text-sm my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                commodi aperiam! Velit dolore ar
              </p>
              <div className=" flex flex-col gap-1 lg:flex-row ">
                <div className=" flex flex-col gap-2">
                  <div className=" flex gap-1 ">
                    <Image
                      src={"/blood.png"}
                      alt="blood-photo"
                      width={15}
                      height={15}
                    />
                    <p className=" font-semibold text-sm">A+</p>
                  </div>
                  <div className=" flex gap-1">
                    <Image
                      src={"/calendar.png"}
                      alt="calendar-photo"
                      width={15}
                      height={15}
                    />
                    <p className=" font-semibold text-sm">January 2005</p>
                  </div>
                </div>
                <div className=" flex flex-col gap-2">
                  <div className=" flex gap-1">
                    <Image
                      src={"/mail.png"}
                      alt="mail-photo"
                      width={15}
                      height={15}
                    />
                    <p className=" font-semibold text-sm">Guerro@gamil.com</p>
                  </div>{" "}
                  <div className=" flex gap-1 items-center">
                    <Image
                      src={"/phone.png"}
                      alt="phone-photo"
                      width={15}
                      height={15}
                    />
                    <p className=" font-semibold text-sm">+1 234 567 49</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARD  */}
          <div className=" w-full lg:w-1/2 gap-4 flex flex-col ">
            <div className=" flex gap-4 h-full">
              <SmallCard
                icon="/singleAttendance.png"
                title="attendances"
                amount="90%"
              />
              <SmallCard icon="/singleBranch.png" title="branches" amount="2" />
            </div>
            <div className=" flex gap-2 h-full">
              <SmallCard icon="/singleLesson.png" title="lesson" amount="6" />
              <SmallCard icon="/singleClass.png" title="classes" amount="6" />
            </div>
          </div>
        </div>
        {/* BOTTOM  */}
        <div className=" mt-4 bg-white rounded-md p-4  w-full space-y-3">
          <h1 className=" font-semibold text-lg"> Teacher's Schedule</h1>
          <EventCalendar />
        </div>
      </div>
      {/* RIGHT  */}
      <div className=" w-full xl:w-1/3">
        <div className=" bg-white p-4 rounded-md">
          <h1 className=" text-xl font-semibold ">Shortcuts</h1>
          <div className=" mt-4 gap-4 flex flex-wrap text-xs text-gray-500">
            <Link href={"/"} className=" bg-purple px-4 py-2 rounded-sm">Teacher&apos;s Classes</Link>
            <Link href={"/"} className=" bg-sky px-4 py-2 rounded-sm">Teacher&apos;s Students</Link>
            <Link href={"/"} className=" bg-skyLight px-4 py-2 rounded-sm">Teacher&apos;s Lessons</Link>
            <Link href={"/"} className=" bg-yellow px-4 py-2 rounded-sm">Teacher&apos;s Exams</Link>
            <Link href={"/"} className=" bg-pink-200 px-4 py-2 rounded-sm">Teacher&apos;s Assignments</Link>
          </div>
        </div>
        <Announcements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
