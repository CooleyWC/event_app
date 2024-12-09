import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const EventDetail = () => {

    const params = useParams()
    console.log('params', params)
    const eventID = params.eventid

    const [eventData, setEventData] = useState([])

    console.log('eventID', eventID)

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

    return (
        <div className='mt-52'>
            <button className='border-solid border-2'>Back to Events</button>
            <h1 className='text-4xl text-black'>{eventData.name}</h1>
        </div>
    );
};

export default EventDetail;