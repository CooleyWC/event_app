import React, {useState} from 'react';
import CreateVenue from './CreateVenue';
import CreateEventForm from './CreateEventForm';

function CreateEvent() {

    const [venueData, setVenueData] = useState([]);



    return (
        <div>
        {!venueData || venueData.length === 0 ? (
            <CreateVenue />
        ): (
            <CreateEventForm />
        )}
        </div>
    
    );
}

export default CreateEvent;