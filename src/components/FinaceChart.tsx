import Image from 'next/image'
import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Jan",
    expense: 15,
    income: 25,

  },
  {
    name: "Feb",
    expense: 30,
    income: 28,
   
  },
  {
    name: "March",
    expense: 20,
    income: 35,
    
  },
  {
    name: "Apr",
    expense: 18,
    income: 15,
  
  },
  {
    name: "May",
    expense: 52,
    income: 52,

  },
  {
    name: "Jun",
    expense: 48,
    income: 70,
 
  },
  {
    name: "Jul",
    expense: 56,
    income: 45,
    
  },
  {
    name: "Aug",
    expense:28,
    income:35,
  
  },
  {
    name: "Sep",
    expense: 84,
    income: 70,
   
  },
  {
    name: "Oct",
    expense: 52,
    income: 65,
    
  },
  {
    name: "Nov",
    expense: 75,
    income: 75,
   
  },
  {
    name: "Dec",
    expense: 19,
    income: 26,
    
  },
];

const FinaceChart = () => {
  return (
    <div className=" h-full w-full p-4 rounded-lg bg-white space-y-3">
      <div className=" flex justify-between items-center">
        <h1>Finance</h1>
        <Image src={"/moreDark.png"} alt="more-icon" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            dot={{ strokeWidth: 3 }}
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#82ca9d"
            strokeWidth={3}
            dot={{ strokeWidth: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default FinaceChart
