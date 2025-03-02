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
                image={ev.image}
                venue={ev.venue}
            />
        )
    })

    return (
        <div className='pt-2 flex justify-center'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2'>
                {events}
            </div>
        </div>
    );
}

export default EventList;

