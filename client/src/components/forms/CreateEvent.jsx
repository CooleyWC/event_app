import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import CreateVenue from './CreateVenue';
import CreateEventForm from './CreateEventForm';
import useVenueFormData from '../context/VenueFormData';
import useEventFormData from '../context/EventFormData';

import { useAuth} from '../context/AuthProvider'

import {set} from 'date-fns'


function CreateEvent({handleNewEvent}) {

    let navigate = useNavigate();

    const {user} = useAuth()
    const {venueFormData, saveVenueFormData, clearVenueFormData} = useVenueFormData();
    const {eventFormData, saveEventFormData, clearEventFormData} = useEventFormData();

    const [isVenueFormEmpty, setIsVenueFormEmpty] = useState(true);

    useEffect(()=>{
        setIsVenueFormEmpty(Object.keys(venueFormData).length===0)
    }, [venueFormData])

    const submitVenue = async (values) =>{

        try {
            const res = await fetch('/api/venues', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(values)
            })
            const venueData = await res.json()

            if(!res.ok){
                console.log('error', venueData.error)
                return
            } else {
                console.log('venue success!', venueData)
                saveVenueFormData(venueData)
            }
        } catch {
            console.log('error')
            return
        }
        
    }
    // datetime

    const [startDate, setStartDate] = useState(new Date())
    const [eventStart, setEventStart] = useState(new Date())
    const [eventEnd, setEventEnd] = useState(new Date())


    const startDateChange = (newDate)=>{
        setStartDate(newDate)
    }

    const startTimeChange = (newStartTime)=>{
        setEventStart(newStartTime)
    }

    const endTimeChange = (newEndTime)=>{
        setEventEnd(newEndTime)
    }

    function combineDateAndTime(date, time) {
        const combinedDate = set(date, {
            hours: time.getHours(),
            minutes: time.getMinutes(),
            seconds: time.getSeconds(),
        })

        const parsedDate = new Date(combinedDate)
        const formatted = parsedDate.toISOString().slice(0, 19) + "Z";
        return formatted

    }
    

    const submitEvent = async (values) =>{

        const startTime = combineDateAndTime(startDate, eventStart)
        const endTime = combineDateAndTime(startDate, eventEnd)

        const newEventObj = {
            "name": values.name,
            "startTime": startTime,
            "endTime": endTime,
            "image": values.imageURL,
            "description": values.description, 
            "creatorId": user.id, 
            "venueId": venueFormData.id
        }
        
        console.log('newEventObj', newEventObj)

        try {
            const res = await fetch('/api/events', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(newEventObj)
            })
            const eventData = await res.json()

            if(!res.ok){
                console.log('error', eventData.error)
                return
            } else {
                saveEventFormData(eventData)
                handleNewEvent(eventData)
                clearVenueFormData()
                clearEventFormData()
                navigate('/dashboard/find_events')

            }
        } catch {
            console.log('error')
            return
        }
    }

    return (
        <div>
        { isVenueFormEmpty ? (
            <CreateVenue submitVenue={submitVenue}/>
        ): (
            <CreateEventForm 
                submitEvent={submitEvent}
                startDate={startDate}
                eventStart={eventStart}
                eventEnd={eventEnd}

                onDateChange={startDateChange}
                onStartChange={startTimeChange}
                onEndChange={endTimeChange}
                />
        )}
        <button onClick={clearVenueFormData} className='block dark:text-white text-black border-solid border-2 my-4'>Reset Venue Data</button>
        <button onClick={clearEventFormData} className='dark:text-white text-black border-solid border-2' >Reset Event Data</button>
        </div>
    
    );
}

export default CreateEvent;