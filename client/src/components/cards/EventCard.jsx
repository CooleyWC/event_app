import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

function EventCard({eventID,eventName, startTime, creator, description}) {

    const {user} = useAuth();
    const [hasTicket, setHasTicket] = useState(false)

    const userTickets = user?.tickets || [];

    useEffect(()=>{
        for(let ticket of userTickets){
            if(ticket.event_id === eventID){
                setHasTicket(true)
            }
        }
    }, [user])

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
            <div>
                {hasTicket && (
                    <h1 className='border-solid border-2 inline-block'>(You're going to this event)</h1>
                )}
            </div>
        </div>
    );
}

export default EventCard;