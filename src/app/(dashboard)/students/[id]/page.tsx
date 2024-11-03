import SmallCard from "@/components/SmallCard";
import Image from "next/image";
import React from "react";
import EventCalendar from "@/components/BigCalendar"
import Announcements from "@/components/Announcements.tsx"
import Link from "next/link";
import Performance from "@/components/Performance";
const SingleStudentPage = () => {
  return (
    <div className=" flex-1 flex p-4 flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className=" w-full xl:w-2/3 flex flex-wrap gap-2">
        {/* TOP  */}
        <div className=" flex flex-col lg:flex-row h-1/5  gap-4">
       
        {/* USER INFO CARD */}
<div className="w-full lg:w-1/2 p-3 bg-sky rounded-md flex-1 flex gap-4 "> {/* Adjust min-height as needed */}
  <div className="w-1/3">
    <Image
      src={"/studentPersonalPhoto.jpeg"}
      width={144}
      height={144}
      className="rounded-full"
      alt="personal photo"
    />
  </div>
  <div className="w-3/4 flex flex-col justify-between"> {/* Added justify-between for vertical spacing */}
    <h1 className="font-bold text-xl">Allie Latcher</h1>
    <p className="text-sm my-3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
      commodi aperiam! Velit dolore ar
    </p>
    <div className="flex flex-col gap-1 lg:flex-row">
      <div className="flex flex-col gap-2">
        <div className="flex gap-1">
          <Image
            src={"/blood.png"}
            alt="blood-photo"
            width={15}
            height={15}
          />
          <p className="font-semibold text-sm">junior</p>
        </div>
        <div className="flex gap-1">
          <Image
            src={"/calendar.png"}
            alt="calendar-photo"
            width={15}
            height={15}
          />
          <p className="font-semibold text-sm">January 2008</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-1">
          <Image
            src={"/mail.png"}
            alt="mail-photo"
            width={15}
            height={15}
          />
          <p className="font-semibold text-sm">A_Allie1998@gamil.com</p>
        </div>
        <div className="flex gap-1 items-center">
          <Image
            src={"/phone.png"}
            alt="phone-photo"
            width={15}
            height={15}
          />
          <p className="font-semibold text-sm">+1 234 567 49</p>
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
        <div className="  bg-white rounded-md p-4  w-full space-y-3">
          <h1 className=" font-semibold text-lg"> Student's Schedule</h1>
          <EventCalendar />
        </div>
      </div>
      {/* RIGHT  */}
      <div className=" w-full xl:w-1/3 space-y-4">
        <div className=" bg-white p-4 rounded-md">
          <h1 className=" text-xl font-semibold ">Shortcuts</h1>
          <div className=" mt-4 gap-4 flex flex-wrap text-xs text-gray-500">
            <Link href={"/"} className=" bg-purple px-5 py-2 rounded-sm">Student&apos;s Lessons</Link>
            <Link href={"/"} className=" bg-sky px-5 py-2 rounded-sm">Student&apos;s Teachers</Link>
            <Link href={"/"} className=" bg-skyLight px-5 py-2 rounded-sm">Student&apos;s Results</Link>
            <Link href={"/"} className=" bg-yellow px-5 py-2 rounded-sm">Student&apos;s Exams</Link>
            <Link href={"/"} className=" bg-pink-200 px-4 py-2 rounded-sm">Student&apos;s Assignments</Link>
          </div>
        </div>
        <Performance/>
        <Announcements />
      </div>
    </div>
  );
};

export default SingleStudentPage;
