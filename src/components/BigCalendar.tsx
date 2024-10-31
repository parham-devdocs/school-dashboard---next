"use client"
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from '@/lib/data'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useState } from 'react'
const localizer = momentLocalizer(moment)

const MyCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK)
  const handleViewChange = (selectedView: View) => {
    setView(selectedView)
  }
 return <div>
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
     views={["work_week", "day"]}
     view={view}
     onView={handleViewChange}
      
    />
  </div>
}

export default MyCalendar