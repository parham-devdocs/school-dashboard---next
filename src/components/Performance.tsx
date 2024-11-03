"use client";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import Image from "next/image";
import { motion } from "framer-motion";
const data = [
  { name: "Group A", value: 92, fill: "#C3EBFA" },
  { name: "Group B", value: 8, fill: "#FAE27C" },
];

export default function Performance() {
  return (
    <div className="flex flex-col gap-5 bg-white p-5 h-80 relative">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">Performance</h1>
        <Image src={"/moreDark.png"} alt="more-icon" width={16} height={16} />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={700} height={700}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={50}
            fill="#8884d8"
            label
          />
        </PieChart>
      </ResponsiveContainer>
      <motion.div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 " initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
        <h1 className=" text-center font-semibold">9.2</h1>
        <p className=" text-[12px] text-gray-500">of 10 max LTS</p>
      </motion.div>
      <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:1}} className=" text-center">
1st Semester-2nd Semester
      </motion.div>
    </div>
  );
}
