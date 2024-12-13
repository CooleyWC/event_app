import React, {useEffect, useState} from 'react';
import {useParams, NavLink} from 'react-router-dom';
import { useAuth} from '../context/AuthProvider'


const EventDetail = () => {

    const {user} = useAuth()

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

    const handleTicketClick = async () =>{
        try {
            const response = await fetch('/api/check_event_conflict', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: user.id,
                    event_id: eventData.id,
                    start_time: eventData.start_time,
                    end_time: eventData.end_time,
                    }) 
            })
            const result = await response.json()
            if(result.conflict){
                alert(result.message)
                return
            } 
            console.log('approved', result.message)
        } catch (error) {
            console.error('there was a problem', error)
        }
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