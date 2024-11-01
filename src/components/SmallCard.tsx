import Image from "next/image";
import React from "react";
type Card = {
  icon: string;
  amount: string;
  title: string;
};
const SmallCard = ({ icon, amount, title }: Card) => {
  return (
    <div className=" p-5 bg-white rounded-md w-full ">
      <div className=" flex gap-4">
        <Image src={icon} alt={` ${title} photo`} width={30} height={30} />
        <p className=" font-bold text-xl">{amount}</p>
      </div>
      <p className=" ml-10 text-gray-400 ">{title}</p>
    </div>
  );
};

export default SmallCard;
