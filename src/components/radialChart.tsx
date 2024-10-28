import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Image from "next/image";
const data = [
  { name: "Boys", count:50, fill: "#C3EBFA" },
  { name: "Girls", count:62, pv: 4567, fill: "#FAE27C" },
];

const style = {
  top: "50%",
  right: "-100px",
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

export default function RadialChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1>Students</h1>
        <Image src={"/moreDark.png"} alt="more-icon" width={20} height={20} />
      </div>
      <div className=" h-[75%] w-full  flex justify-center items-center relative">
        <Image
          src={"/maleFemale.png"}
          alt="male-female"
          width={40}
          height={40}
          className=" absolute "
        />
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="50%"
            outerRadius="80%"
            barSize={20}
            data={data}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-sky rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-yellow rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
}
