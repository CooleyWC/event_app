import React, {useEffect, useState} from 'react';
import {useParams, NavLink, useNavigate} from 'react-router-dom';
import { useAuth} from '../context/AuthProvider'


const EventDetail = ({handleProcessTicket, handleTicketDelete}) => {

    // change this later
    const price = 10

    const {user} = useAuth()

    const params = useParams()

    let navigate = useNavigate()
 
    const eventID = params.eventid

    const [eventData, setEventData] = useState([])
    const [hasTicket, setHasTicket] = useState(false)
    const [matchingTicket, setMatchingTicket] = useState(null)

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

    useEffect(()=>{
        for(let ticket of userTickets){
            if(String(ticket.event_id) === String(eventID)){
                setHasTicket(true)
                setMatchingTicket(ticket.id)
            }
        }
    }, [user])

    if(!user){
        return <p>...loading</p>
    }

    const onProcessTicket = ()=>{
        handleProcessTicket(eventData, price)
    }

    const onTicketDelete = ()=>{
        handleTicketDelete(matchingTicket)
        navigate('/dashboard/upcoming_events')
    }


    if(!eventData.venue){
        return <p>....loading</p>
    }

    return (
        <>
        <div className='flex justify-center bg-gray-900'>
            <img src={`${eventData.image}`} alt={`${eventData.name} image`}
                className='max-h-[500px] max-w-full'
            />
        </div>
        <div className='pt-20 px-4 dark:bg-slate-800 h-full min-h-screen dark:text-ivory flex flex-col gap-6'>
            <NavLink to={'/dashboard/find_events'}>
                <button className='bg-transparent font-bold py-2 px-4 border-solid rounded border-ivory border hover:bg-gray-900 hover:text-white transition ease-in-out'>Back to Events</button>
            </NavLink>
            <h1 className='text-6xl text-black dark:text-ivory'>{eventData.name}</h1>
            <div className='font-semibold'>
                <p>{startDateStr}</p>
                <p>{startTimeStr} - {endTimeStr}</p>
            </div>
            <div>
                    <h2 className='font-semibold text-lg'>
                        {eventData.venue.name}
                    </h2>
                    <p className='text-lg'>
                        {`${eventData.venue.street}, ${eventData.venue.city}, ${eventData.venue.state}, ${eventData.venue.zip}`}
                    </p>
                </div>
            <p>{eventData.description}</p>
            {hasTicket ? (
                <>
                    <h1 className='border-solid border-2 inline-block'>
                        You have a ticket for this event
                    </h1>
                    <button className='bg-transparent font-bold py-2 px-4 border-solid rounded border-ivory border hover:bg-gray-900 hover:text-white transition ease-in-out' onClick={onTicketDelete}>Cancel</button>
                </>
            ):(
                <button className='max-w-56 bg-transparent font-bold py-2 px-4 border-solid rounded border-ivory border hover:bg-gray-900 hover:text-white transition ease-in-out' onClick={onProcessTicket}>Get Ticket</button>
            )}
            
        </div>
        </>
    );
};

export default EventDetail;