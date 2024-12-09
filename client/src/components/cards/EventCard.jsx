import React from 'react';
import {NavLink} from 'react-router-dom';

function EventCard({eventID,eventName, startTime, creator, description}) {


    // const handleClick = ()=>{
    //     console.log('i was clicked')
    // }
    return (
        <div className='bg-slate-200 flex flex-col justify-center px-8 py-8 mx-8 my-2 gap-2 rounded border-solid border-black'>
            <div>
                <h1 className='text-dark-blue text-center text-2xl'>{eventName}</h1>
                <p>{startTime}</p>
                <p>{description}</p>
                <p>{creator}</p>
            </div>
            <div>
                <NavLink to={`/dashboard/event/${eventID}`}>
                    <button className='border-solid border-dark-blue border' >Details</button>
                </NavLink>
            </div>
        </div>
    );
}

export default EventCard;