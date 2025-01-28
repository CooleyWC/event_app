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
                image={ev.image}
            />
        )
    })

    return (
        <div className='pt-2'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                {events}
            </div>
        </div>
    );
}

export default EventList;

