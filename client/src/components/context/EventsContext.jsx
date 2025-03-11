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

    return (
        <EventsContext.Provider value={{allEvents, updateEvent}}>
            {children}
        </EventsContext.Provider>
    )
}

