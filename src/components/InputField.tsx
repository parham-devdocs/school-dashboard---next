import React from "react";
import {motion} from "framer-motion"
type InputType={
  name: string;
  register: any;
  errors: any;
  defaultValue?: string;
  type?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>; // Corrected type here
}
const Input = ({
  name,
  register,
  errors,
  defaultValue,
  type = "text",
  inputProps = {}, // Corrected the destructuring
}:InputType ) => {
  return (
    
    <motion.div className="flex flex-col gap-1 w-[200px] " initial={{opacity:0,}} animate={{opacity:1}} transition={{duration:2}}>
      <label htmlFor={name} className="font-semibold text-sm">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <input
        id={name}
        type={type}
        className="px-2 py-1 border-gray-400 border-[2px] outline-none rounded-md bg-transparent focus:outline-2 focus:outline-blue-700 transition duration-300"
        {...register(name)}
        {...inputProps}
        defaultValue={defaultValue} // Ensure this is used correctly
      />
      {errors[name]?.message && (
        <p className="text-red-500 text-[10px]">
          {errors[name]?.message.toString()}
        </p>
      )}
    </motion.div>
  );
};

export default Input;
