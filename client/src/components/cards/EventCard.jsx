import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

function EventCard({eventID,eventName, startTime, endTime, creator, description, image}) {

    const {user} = useAuth();
    const [hasTicket, setHasTicket] = useState(false)

    const userTickets = user?.tickets || [];

    const startTimeFormat = new Date(startTime)
    const startDateStr = startTimeFormat.toLocaleDateString('en-US', {month: 'long', weekday: 'long', day: '2-digit', year: 'numeric'})
    const startTimeStr = startTimeFormat.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'})

    const endTimeFormat = new Date(endTime)
    const endTimeStr = endTimeFormat.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'})

    useEffect(()=>{
        for(let ticket of userTickets){
            if(ticket.event_id === eventID){
                setHasTicket(true)
            }
        }
    }, [user])

    return (
        <div className='dark:bg-gray-700 dark:text-ivory max-w-sm rounded mx-2 my-2 flex flex-col'>
            <div>
                <img src={image} className='h-[200px] w-full object-cover'/>
            </div>
            <div className='px-6 py-4 flex-grow flex flex-col mb-10'>
      
                <h1 className='text-center text-2xl font-bold mb-4 tracking-wider'>{eventName}</h1>
                <h2 className='text-lg tracking-wide'>{startDateStr}</h2>
                <p className='mb-8 text-lg tracking-wide'>{startTimeStr} - {endTimeStr}</p>
                <p>{description}</p>
                <p>{creator}</p>

            </div>
            <div className='mt-auto mb-10 px-6'>
                <NavLink to={`/dashboard/event/${eventID}`} className='bg-transparent font-bold py-2 px-4 border-solid rounded border-ivory border hover:bg-gray-900 hover:text-white transition ease-in-out'>
                    Details
                </NavLink>
                {hasTicket && (
                    <h1 className='inline-block mx-2'>(You're going to this event)</h1>
                )}
            </div>
        </div>
    );
}

export default EventCard;