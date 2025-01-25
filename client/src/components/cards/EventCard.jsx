import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

function EventCard({eventID,eventName, startTime, endTime, creator, description}) {

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
        <div className='bg-slate-200 w-full flex flex-col justify-center px-8 py-8 mx-8 my-2 gap-2 rounded border-solid border-black'>
            <div>
                <h1 className='text-dark-blue text-center text-2xl'>{eventName}</h1>
                <p>{startDateStr}</p>
                <p>{startTimeStr} - {endTimeStr}</p>
                <p>{description}</p>
                <p>{creator}</p>
            </div>
            <div>
                <NavLink to={`/dashboard/event/${eventID}`}>
                    <button className='border-solid border-dark-blue border' >Details</button>
                </NavLink>
            </div>
            <div>
                {hasTicket && (
                    <h1 className='border-solid border-2 inline-block'>(You're going to this event)</h1>
                )}
            </div>
        </div>
    );
}

export default EventCard;