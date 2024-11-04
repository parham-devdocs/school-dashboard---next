import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

const Input = ({
  name,
  register,
  errors,
}: {
  name: string;
  register: any;
  errors: any;
}) => {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={name} className="font-semibold">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <input
        id={name}
        type="text"
        className="px-2 py-1 border-gray-400 border-[2px] outline-none rounded-md bg-transparent focus:outline-2 focus:outline-blue-700 transition duration-300"
        {...register(name)}
      />
      {errors[name]?.message && (
        <p className="text-red-500 text-[10px]">
          {errors[name]?.message.toString()}
        </p>
      )}
    </div>
  );
};

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
img:z.any(),
  sex: z.enum(["male", "female"], { message: "Sex is required" }),
});

const TeacherForm = ({ type }: { type: "create" | "update" }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
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
        <div className="space-y-6">
          <h2 className="text-stone-400">Authentication Information</h2>
          <div className="flex flex-wrap gap-8">
            <Input name="username" register={register} errors={errors} />
            <Input name="email" register={register} errors={errors} />
            <Input name="password" register={register} errors={errors} />
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-stone-400">Personal Information</h2>
          <div className="flex flex-wrap gap-8">
            <Input name="firstName" register={register} errors={errors} />
            <Input name="lastName" register={register} errors={errors} />
            <Input name="phone" register={register} errors={errors} />
            <Input name="address" register={register} errors={errors} />
            <div className="flex flex-col gap-3">
              <label htmlFor="dateOfBirth" className="font-semibold">
                Date Of Birth
              </label>
              <input
                id="dateOfBirth"
                type="date"
                className="px-2 py-1 border-gray-400 border-[2px] outline-none rounded-md bg-transparent focus:outline-2 focus:outline-blue-700 transition duration-300"
                {...register("birthDay")}
              />
              {errors.birthDay?.message && (
                <p className="text-red-500 text-sm">
                  {errors?.birthDay?.message.toString()}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="sex" className="font-semibold">
                Gender
              </label>
              <select
                id="sex"
                className="px-2 py-1 border-gray-400 border-[2px] outline-none rounded-md bg-transparent focus:outline-2 focus:outline-blue-700 transition duration-300"
                {...register("sex")}
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
            <div className=" flex flex-col gap-3 my-7 ">
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
