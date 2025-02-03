import React, {useState, useEffect} from 'react';
import CreateVenue from './CreateVenue';
import CreateEventForm from './CreateEventForm';
import useVenueFormData from '../context/VenueFormData';
import useEventFormData from '../context/EventFormData';

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


    return (
        <div>
        { isVenueFormEmpty ? (
            <CreateVenue submitVenue={submitVenue}/>
        ): (
            <CreateEventForm submitEvent={submitEvent}/>
        )}
        <button onClick={clearVenueFormData}>Reset Venue Data</button>
        <button onClick={clearEventFormData}>Reset Event Data</button>
        </div>
    
    );
}

export default CreateEvent;