import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

function AdminEventCard({eventID, eventName, startTime, endTime, description, image, venue}) {


    const {user} = useAuth();


    const startTimeFormat = new Date(startTime)
    const startDateStr = startTimeFormat.toLocaleDateString('en-US', {month: 'long', weekday: 'long', day: '2-digit', year: 'numeric'})
    const startTimeStr = startTimeFormat.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'})

    const endTimeFormat = new Date(endTime)
    const endTimeStr = endTimeFormat.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'})


    if(!venue){
        return <p>....loading</p>
    }

    console.log('venue', venue)

    return (
        <div className='dark:bg-gray-700 dark:text-ivory w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-2 lg: lg:grid-cols-3 xl:grid-cols-4 rounded mx-2 my-2 p-2 gap-4'>
            <div>
                <h2>ID: {eventID}</h2>
            </div>
            <div>
                <p>Name: {eventName}</p>
            </div>
            <div>
                <p>Start Time: {startTimeStr}</p>
            </div>
            <div>
                <p>End Time: {endTimeStr}</p>
            </div>
            <div>
                <p>Description: {description}</p>
            </div>
            <div>
                <p>Image Address: {image}</p>
            </div>
            <span className='h-[0.5px] bg-white w-full my-4 col-span-4'></span>
            <h2>Venue</h2>
            <div>
                <h2>ID: {venue.id}</h2>
            </div>
            <div>
                <p>Name: {venue.name}</p>
            </div>
            <div>
                <p>Street: {venue.street}</p>
            </div>
            <div>
                <p>City: {venue.city}</p>
            </div>
            <div>
                <p>State: {venue.state}</p>
            </div>
            <div>
                <p>Zip: {venue.zip}</p>
            </div>
            <div>
                <p>Capacity: {venue.capacity}</p>
            </div>
            <div className='col-span-4'>
                <p>Description: {venue.description}</p>
            </div>
           

          
            
        </div>
    );
}

export default AdminEventCard;