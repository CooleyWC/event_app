import { useEffect } from 'react';
import {createContext, useContext, useState} from 'react';


const EventsContext = createContext({})

export const useEvents = ()=>{
    return useContext(EventsContext)
}

export const EventsProvider = ({children})=>{
    const [allEvents, setAllEvents] = useState([])

    const updateEvent = (updatedEvent)=>{
        setAllEvents((prevEvents)=>
            prevEvents.map((event)=>
                event.id === updateEvent.id ? updatedEvent : event
            )
        )
    }

    return (
        <EventsContext.Provider value={{allEvents, updateEvent}}>
            {children}
        </EventsContext.Provider>
    )
}

