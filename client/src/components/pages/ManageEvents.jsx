import React from 'react';
import EventCard from '../cards/EventCard';
import { useAuth } from '../context/AuthProvider';
import AdminEventCard from '../cards/AdminEventCard';


function ManageEvents({allEvents}) {

    const {user} = useAuth()

    const createdEvents = user.created_events

    console.log('manage events createdEvents:', createdEvents)

    const adminEvents = createdEvents.map((ev)=>{
        return (
            <AdminEventCard
                key={ev.id}
                eventID={ev.id}
                eventName={ev.name}
                startTime={ev.start_time}
                endTime={ev.end_time}
                description={ev.description}
                image={ev.image}
                venue={ev.venue}
            />
        )
    })

    return (
        <div className='pt-2 flex flex-col items-center'>
            <h1>Event Manager</h1>
            <div className='flex flex-col items-center w-full max-w-[2000px]'>
                {adminEvents}
            </div>    
        </div>
    );
}

export default ManageEvents;

