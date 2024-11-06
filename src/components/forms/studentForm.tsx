import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Input from "@/components/InputField";
import { motion } from "framer-motion";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long" }),
  email: z.string().email({ message: "Email is required" }),
  address: z.string({ message: "address is required " }),
  photo: z.any(),
  phone: z.string().min(1, { message: "Phone number is required!" }),
  grade: z.number({ message: "grade must be a number" }).min(1).max(20),
  studentClass: z.string({ message: "student class is required" }),
});

const StudentForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data: any;
}) => {
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
        {type === "create" ? "Create A New Student" : "Update Student"}
      </h1>
      <div className="my-6 flex flex-col gap-6">
        <div className="space-y-4">
          <motion.h2
            className="text-stone-400"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 1 }}
          >
            Personal Information
          </motion.h2>
          <div className="flex flex-wrap gap-8 justify-between">
            <Input
              name="name"
              register={register}
              errors={errors}
              defaultValue={data?.name}
            />
            <Input name="email" register={register} errors={errors} />
            <Input name="address" register={register} errors={errors} />
            <div className=" flex flex-col gap-3  my-6  ">
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
                  {...register("photo")}
                />
              </div>

              {errors.photo?.message && (
                <p className="text-red-500 text-sm">
                  {errors?.photo?.message.toString()}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <motion.h2
            className="text-stone-400"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 1 }}
          >
            educational Information
          </motion.h2>
          <div className="flex flex-wrap gap-8 justify-between ">
            <Input name="grade" register={register} errors={errors} />
            <Input name="studentClass" register={register} errors={errors} />
          </div>
        </div>
      </div>
      <button className="w-full h-10 bg-blue-700 rounded-md text-white hover:bg-blue-900 transition duration-300 font-sans">
        {type === "create" ? "Create Student" : "Update Student"}
      </button>
    </form>
  );
};

export default StudentForm;
