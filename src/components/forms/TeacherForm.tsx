import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Input from "@/components/InputField";
import { motion } from "framer-motion";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long" }),
  email: z.string().email({ message: "Email is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" }),
  firstName: z.string().min(1, { message: "First name is required!" }),
  lastName: z.string().min(1, { message: "Last name is required!" }),
  phone: z.string().min(1, { message: "Phone number is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  img: z.any(),
  sex: z.enum(["male", "female"], { message: "Sex is required" }),
  birthDay: z.any(),
});

const TeacherForm = ({ type,data }: { type: "create" | "update",data:any }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission logic here (e.g., API call)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="font-bold text-lg">
        {type === "create" ? "Create A New Teacher" : "Update Teacher"}
      </h1>
      <div className="my-6 flex flex-col gap-6">
        <div className="space-y-4">
          <motion.h2
            className="text-stone-400"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2,delay:1 }}
          >
            Authentication Information
          </motion.h2>
          <div className="flex flex-wrap gap-8 justify-between">
            <Input
              name="username"
              register={register}
              errors={errors}
              defaultValue={data?.name}
            />
            <Input name="email" register={register} errors={errors} />
            <Input name="password" register={register} errors={errors} />
          </div>
        </div>
        <div className="space-y-4">
          <motion.h2
            className="text-stone-400"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 ,delay:1}}
          >
            Personal Information
          </motion.h2>
          <div className="flex flex-wrap gap-8 justify-between ">
            <Input name="firstName" register={register} errors={errors} />
            <Input name="lastName" register={register} errors={errors} />
            <Input name="phone" register={register} errors={errors} />
            <Input name="address" register={register} errors={errors} />
            <div className="flex flex-col gap-3">
              <Input
                errors={errors}
                type="date"
                register={register}
                name="birth day"
              />

              {errors.birthDay?.message && (
                <p className="text-red-500 text-sm">
                  {errors?.birthDay?.message.toString()}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="sex" className="font-semibold text-sm">
                Gender
              </label>
              <select
                id="sex"
                className="px-2 py-1 border-gray-400 border-[2px] outline-none rounded-md bg-transparent focus:outline-2 focus:outline-blue-700 transition duration-300"
                {...register("sex")}
                defaultValue={data?.sex}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.sex?.message && (
                <p className="text-red-500 text-sm">
                  {errors?.sex?.message.toString()}
                </p>
              )}
            </div>
            <div className=" flex flex-col gap-3 sm:my-7 my-1  ">
              <div className=" flex gap-3">
                <label
                  htmlFor="img"
                  className="font-semibold flex gap-2 items-center cursor-pointer "
                >
                  <Image
                    src={"/upload.png"}
                    width={30}
                    height={30}
                    alt=" upload-photo"
                  />
                  <h2 className=" font-bold ">Upload a Photo</h2>
                </label>
                <input
                  id="img"
                  type="file"
                  className=" hidden"
                  {...register("img")}
                />
              </div>

              {errors.img?.message && (
                <p className="text-red-500 text-sm">
                  {errors?.img?.message.toString()}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <button className="w-full h-10 bg-blue-700 rounded-md text-white hover:bg-blue-900 transition duration-300">
        {type === "create" ? "Create Teacher" : "Update Teacher"}
      </button>
    </form>
  );
};

export default TeacherForm;
