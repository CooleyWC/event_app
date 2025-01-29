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
        <div className='bg-slate-200 max-w-sm rounded mx-2 my-2 flex flex-col'>
            <div>
                <img src={image} className='h-[200px] w-full object-cover'/>
            </div>
            <div className='px-6 py-4 flex-grow flex flex-col mb-10'>
      
                <h1 className='text-dark-blue text-center text-2xl font-bold mb-4'>{eventName}</h1>
                <h2 className='text-lg'>{startDateStr}</h2>
                <p className='mb-4'>{startTimeStr} - {endTimeStr}</p>
                <p>{description}</p>
                <p>{creator}</p>

            </div>
            <div className='mt-auto mb-10 px-6'>
                <NavLink to={`/dashboard/event/${eventID}`} className='bg-transparent font-bold py-2 px-4 border-solid rounded border-dark-blue border hover:bg-periwinkle hover:text-white transition ease-in-out'>
                    Details
                </NavLink>
                {hasTicket && (
                    <h1 className='border-solid border-2 inline-block'>(You're going to this event)</h1>
                )}
            </div>
        </div>
    );
}

export default EventCard;