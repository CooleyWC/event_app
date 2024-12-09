import React, {useEffect, useState} from 'react';
import {useParams, NavLink} from 'react-router-dom';

const EventDetail = () => {

    const params = useParams()
 
    const eventID = params.eventid

    const [eventData, setEventData] = useState([])

 

    useEffect(()=>{
        fetch(`/api/event_by_id/${eventID}`)
        .then(res=>res.json())
        .then(data=>{
            setEventData(data)
        })
        .catch((error)=>console.error(error))
    }, [eventID])

    if(!eventData){
        return <p>...loading</p>
    }

    const handleTicketClick = () =>{
        console.log('purchase ticket for this event', eventID)
    }

    return (
        <div className='mt-52'>
            <NavLink to={'/dashboard/find_events'}>
                <button className='border-solid border-2'>Back to Events</button>
            </NavLink>
            <h1 className='text-4xl text-black'>{eventData.name}</h1>
            <p>{eventData.start_time}</p>
            <p>{eventData.description}</p>
            <button className='border-solid border-2' onClick={handleTicketClick}>Get Ticket</button>
        </div>
    );
};

export default EventDetail;