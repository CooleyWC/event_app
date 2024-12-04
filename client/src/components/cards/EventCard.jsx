import React from 'react';

function EventCard({eventName, startTime, creator, description}) {
    return (
        <div className='bg-slate-200 flex flex-col justify-center px-8 py-8 mx-8 my-2 gap-2 rounded border-solid border-black'>
            <h1 className='text-dark-blue text-center text-2xl'>{eventName}</h1>
            <p>{startTime}</p>
            <p>{description}</p>
            <p>{creator}</p>
        </div>
    );
}

export default EventCard;