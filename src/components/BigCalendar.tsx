"use client"
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from '@/lib/data'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useState } from 'react'
const localizer = momentLocalizer(moment)
import "./BigCalendar.css"

const MyCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK)
  const [date,setDate]=useState(new Date())
  const handleViewChange = (selectedView: View) => {
    setView(selectedView)
  }
 return <div >
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
     views={["work_week", "day","month"]}
     view={view}
     onView={handleViewChange}
     onNavigate={(date)=>{setDate(new Date(date))}}
     date={date}
      
    />
  </div>
}

export default MyCalendar