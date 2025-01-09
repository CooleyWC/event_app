import React from 'react';
import EventCard from '../cards/EventCard';


function EventList({allEvents}) {

    const events = allEvents.map((ev)=>{
        return (
            <EventCard 
                key={ev.id}
                eventID={ev.id}
                eventName={ev.name}
                startTime={ev.start_time}
                endTime={ev.end_time}
                description={ev.description}
                creator={ev.creator}

            />
        )
    })

    return (
        <div className='h-screen pt-2'>
            <div>
                {events}
            </div>
            
        </div>
    );
}

export default EventList;

