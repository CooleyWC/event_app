import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import "./calendar.css"

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

function UserCalendar({userTickets}) {
  
  const eventsToDisplay = userTickets.map((ticket)=>{

    return ({
      title: ticket.event.name,
      start: parse(ticket.event.start_time, 'yyyy-MM-dd HH:mm:ss', new Date()),
      end: parse(ticket.event.end_time, 'yyyy-MM-dd HH:mm:ss', new Date()),
    })
  })

    return (
        <div>
            <Calendar
              localizer={localizer}
              events={eventsToDisplay}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
            />
        </div>
    );
}

export default UserCalendar;