import { useEffect } from 'react';
import {createContext, useContext, useState} from 'react';


const EventsContext = createContext({})

export const useEvents = ()=>{
    return useContext(EventsContext)
}

export const EventsProvider = ({children})=>{
    const [allEvents, setAllEvents] = useState([])

    useEffect(()=>{
        fetch('/api/events')
        .then(res=>res.json())
        .then(data=>{
          setAllEvents(data)
        })
      }, [])

    const updateEvent = (updatedEvent)=>{
        const updatedEvents = allEvents.map((event)=>
            event.id === updatedEvent.id ? updatedEvent : event
        )
        setAllEvents(updatedEvents)
    }

    const deleteEvent = (id)=>{
        const eventsAfterDelete = allEvents.filter((event)=>{
            return event.id !== id
        })
        setAllEvents(eventsAfterDelete)

    }

    return (
        <EventsContext.Provider value={{allEvents, setAllEvents, updateEvent, deleteEvent}}>
            {children}
        </EventsContext.Provider>
    )
}

