import React from 'react';
import { useAuth } from '../context/AuthProvider';
import { useEvents } from '../context/EventsContext';
import AdminEventCard from '../cards/AdminEventCard';



function ManageEvents() {

    const {user} = useAuth()

    const {allEvents} = useEvents();

    const createdEvents = allEvents.filter((event)=>event.creator_id === user.id)

    const adminEvents = createdEvents.map((ev)=>{
        return (
            <AdminEventCard
                key={ev.id}
                eventID={ev.id}
                // eventName={ev.name}
                // startTime={ev.start_time}
                // endTime={ev.end_time}
                // description={ev.description}
                // image={ev.image}
                // venue={ev.venue}
                // event={ev}
            />
        )
    })

    return (
        <div className='pt-2 flex flex-col items-center'>
            <h1>Event Manager</h1>
            <div className='flex flex-col items-center w-full px-4 max-w-[2000px]'>
                {adminEvents}
            </div>    
        </div>
    );
}

export default ManageEvents;

