import React, {useEffect, useState} from 'react';
import {useParams, NavLink} from 'react-router-dom';
import { useAuth} from '../context/AuthProvider'


const EventDetail = ({handleProcessTicket}) => {

    // change this later
    const price = 10

    const {user} = useAuth()

    const params = useParams()
 
    const eventID = params.eventid

    const [eventData, setEventData] = useState([])

    const [hasTicket, setHasTicket] = useState(false)

    const userTickets = user?.tickets || [];

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

    const startTimeFormat = new Date(eventData.start_time)
    const startDateStr = startTimeFormat.toLocaleDateString('en-US', {month: 'long', weekday: 'long', day: '2-digit', year: 'numeric'})
    const startTimeStr = startTimeFormat.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'})

    const endTimeFormat = new Date(eventData.end_time)
    const endTimeStr = endTimeFormat.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'})
    console.log(endTimeStr)

    useEffect(()=>{
        for(let ticket of userTickets){
            if(String(ticket.event_id) === String(eventID)){
                setHasTicket(true)
            }
        }
    }, [user])

    if(!user){
        return <p>...loading</p>
    }

    const onProcessTicket = ()=>{
        handleProcessTicket(eventData, price)
    }

    return (
        <div className='mt-52'>
            <NavLink to={'/dashboard/find_events'}>
                <button className='border-solid border-2'>Back to Events</button>
            </NavLink>
            <h1 className='text-4xl text-black'>{eventData.name}</h1>
            <p>{startDateStr}</p>
            <p>{startTimeStr} - {endTimeStr}</p>
            <p>{eventData.description}</p>
            {hasTicket ? (
                <h1 className='border-solid border-2 inline-block'>You have a ticket for this event</h1>
            ):(
                <button className='border-solid border-2' onClick={onProcessTicket}>Get Ticket</button>
            )}
        </div>
    );
};

export default EventDetail;