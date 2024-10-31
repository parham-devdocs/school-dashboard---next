import React from 'react'
import  EventCalendar  from '@/components/eventCalendar';
import MyCalendar from '@/components/BigCalendar';

const StudentPage = () => {
  return (
    <div className=" p-4 gap-4 flex flex-col xl:flex-row">
      
      {/* LEFT */}
      <div className=" w-full xl:w-2/3 ">
        <div className=' h-full bg-white p-4 rounded-md space-y-4'>
          <h1 className=' text-xl font-semibold'>Schedule(A4)</h1>
<MyCalendar/>
        </div>
      </div>
            {/* RIGHT */}

      <div className=" w-full xl:w-1/3">
        <EventCalendar />
        
      </div>
    </div>
  );
}

export default StudentPage
