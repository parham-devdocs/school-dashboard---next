import Menu from "@/components/Menu";

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" h-screen flex">
      <div className=" w-1/6 md:w-[8%] lg:w-1/6  ">
        <Menu />
      </div>      
    <div className=" w-5/6 md:[92%] lg:w-5/6 bg-[#F7F8FA] overflow-scroll "></div>
    </div>
        
  );
}
