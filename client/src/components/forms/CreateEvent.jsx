import React, {useState, useEffect} from 'react';
import CreateVenue from './CreateVenue';
import CreateEventForm from './CreateEventForm';
import useVenueFormData from '../context/VenueFormData';
import useEventFormData from '../context/EventFormData';

import {format, set} from 'date-fns'

function CreateEvent() {

    const {venueFormData, saveVenueFormData, clearVenueFormData} = useVenueFormData();
    const {eventFormData, saveEventFormData, clearEventFormData} = useEventFormData();


    const [isVenueFormEmpty, setIsVenueFormEmpty] = useState(true);

    useEffect(()=>{
        setIsVenueFormEmpty(Object.keys(venueFormData).length===0)
    }, [venueFormData])

    const submitVenue = (values) =>{
        console.log('venue', values)
        saveVenueFormData(values)
    }

    const submitEvent = (values) =>{
        console.log('event values', values)
        saveEventFormData(values)
    }

    // datetime

    const [startDate, setStartDate] = useState(new Date())
    const [startTime, setStartTime] = useState(new Date())
    const [endTime, setEndTime] = useState(new Date())


    const startDateChange = (newDate)=>{
        setStartDate(newDate)
    }

    const startTimeChange = (newStartTime)=>{
        setStartTime(newStartTime)
    }

    const endTimeChange = (newEndTime)=>{
        setEndTime(newEndTime)
    }

    function combineDateAndTime(date, time) {
            return set(date, {
                hours: time.getHours(),
                minutes: time.getMinutes(),
                seconds: time.getSeconds(),
            })
        }
    
    console.log('combined', combineDateAndTime(startDate, startTime))
    console.log('combined end', combineDateAndTime(startDate, endTime))


    return (
        <div>
        { isVenueFormEmpty ? (
            <CreateVenue submitVenue={submitVenue}/>
        ): (
            <CreateEventForm 
                submitEvent={submitEvent}
                startDate={startDate}
                startTime={startTime}
                endTime={endTime}

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