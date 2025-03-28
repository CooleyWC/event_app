import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

function EventCard({eventID, eventName, startTime, endTime, description, image, venue}) {


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

    if(!venue){
        return <p>....loading</p>
    }

    return (
        <div className='dark:bg-la-gray-med-light dark:text-ivory max-w-sm rounded mx-2 my-2 flex flex-col'>
            <div>
                <img src={image} className='h-[200px] w-full object-cover'/>
            </div>
            <article className='px-6 py-4 flex-grow flex flex-col space-y-4'>
                <div>
                    <h1 className='text-center text-2xl font-bold tracking-wider mb-2'>{eventName}</h1>
                    <h2 className='text-lg tracking-wide'>{startDateStr}</h2>
                    <p className='text-lg tracking-wide'>{startTimeStr} - {endTimeStr}</p>
                </div>
                <div>
                    <h2 className='font-semibold text-lg'>
                        {`${venue.city}, ${venue.state}`}
                    </h2>
                   
                </div>
                <div>
                    <h3 className='font-semibold'>Description:</h3>
                    <p>{description}</p>
                </div>

            </article>
          
            <div className='mt-auto mb-10 px-6'>
                <NavLink to={`/dashboard/event/${eventID}`} className='bg-transparent font-bold py-2 px-4 mr-2 border-solid rounded border-ivory border hover:bg-gray-900 hover:text-white transition ease-in-out'>
                    Details
                </NavLink>
                {hasTicket && (
                    <h1 className='inline-block mt-4'>(You're going to this event)</h1>
                )}
            </div>
        </div>
    );
}

export default EventCard;