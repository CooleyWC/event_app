import React, {useState} from 'react';
import CreateVenue from './CreateVenue';
import CreateEventForm from './CreateEventForm';
import useVenueFormData from '../context/VenueFormData';

function CreateEvent() {

    const {venueFormData, saveVenueFormData, clearVenueFormData} = useVenueFormData();

    console.log(venueFormData)

    const isVenueFormEmpty = (data)=>{
        return Object.keys(data).length === 0;
    }

    

    return (
        <div>
        { isVenueFormEmpty(venueFormData) ? (
            <CreateVenue />
        ): (
            <CreateEventForm />
        )}
        <button onClick={clearVenueFormData}>Reset Venue Data</button>
        </div>
    
    );
}

export default CreateEvent;