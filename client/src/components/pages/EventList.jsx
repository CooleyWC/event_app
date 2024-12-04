import React from 'react';
import EventCard from '../cards/EventCard';


function EventList({allEvents}) {

    const events = allEvents.map((ev)=>{
        return (
            <EventCard 
                eventName={ev.name}
                startTime={ev.start_time}
                description={ev.description}
                creator={ev.creator}
            />
        )
    })

    return (
        <div className='bg-slate-300 h-screen pt-2'>
            <div>
                {events}
            </div>
            
        </div>
    );
}

export default EventList;

