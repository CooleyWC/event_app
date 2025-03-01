import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import CreateVenueForm from './CreateVenueForm';
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

    const userCreatedEvents = user.created_events

    const createdVenues = userCreatedEvents.map((event)=>{
        return (
            <div key={event.id}>
                {event.venue.name}
                {event.venue.id}
            </div>
        )
    })

    console.log('created Venues', createdVenues)

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
                // delete the associated venue here - call a delete func
                // get the venue id
                // delete route
                handleVenueDelete(venueFormData.id)
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

    const handleBackClick = ()=>{
        console.log('back clicked in create event')
        clearVenueFormData() 
    }

    const handleVenueDelete = (id) =>{
        fetch(`/api/venue_by_id/${id}`, {
            method: 'DELETE'
        })
        .then((res)=>{
            if(res.ok){
                clearVenueFormData()
                clearEventFormData() 
                alert('there was an error creating this event - please try resubmitting the venue and event forms.')
            }
        })
    }

    return (
        <div>
            {/* {createdVenues} */}
        { isVenueFormEmpty ? (
            <CreateVenueForm submitVenue={submitVenue} userCreatedEvents={userCreatedEvents}/>
        ): (
            <CreateEventForm 
                submitEvent={submitEvent}
                startDate={startDate}
                eventStart={eventStart}
                eventEnd={eventEnd}

                onDateChange={startDateChange}
                onStartChange={startTimeChange}
                onEndChange={endTimeChange}
                handleBackClick={handleBackClick}
                />
        )}
        
        </div>
    
    );
}

export default CreateEvent;