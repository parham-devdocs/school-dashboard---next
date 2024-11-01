import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const SingleTeacherPage = () => {
  return (
    <div className=" flex-1 flex p-4 flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className=" w-full xl:w-2/3 flex flex-wrap gap-2">
        {/* TOP  */}
        <div>
          {/* USER INFO CARD */}
          <div className=" w-full lg:w-1/2 p-3 bg-sky rounded-md flex gap-4">
            <div>
              <Image
                src={"/teacherPresonalPhoto.jpeg"}
                width={100}
                height={100}
                className=" rounded-full w-80"
                alt="personal photo"
              />
            </div>
            <div>
              <h1 className=" font-bold text-xl">Dean Guerro</h1>
              <p className=" text-sm my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                commodi aperiam! Velit dolore ar
              </p>
              <div className=" flex flex-col gap-1">
                <div className=" flex gap-1">
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
          {/* SMALL CARD  */}
          <div className=" w-full lg:w-1/2"></div>
        </div>
        {/* BOTTOM  */}
        <div className="">Schedule</div>
      </div>
      {/* RIGHT  */}
      <div className=" w-full xl:w-1/3">r</div>
    </div>
  );
};

export default SingleTeacherPage;
