import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { useEvents } from '../context/EventsContext';
import UpdateEventForm from '../forms/UpdateEventForm'

function AdminEventCard({eventID}) {


    const {user} = useAuth();
    const [updateOpen, setUpdateOpen] = useState(false)
    const [attrSelect, setAttrSelect] = useState(null)

    const {allEvents, updateEvent, deleteEvent} = useEvents()

    const event = allEvents.find((evt)=> evt.id === eventID)

    const {name, start_time, end_time, description, image, venue} = event

    const startTimeFormat = new Date(start_time)
    const startDateStr = startTimeFormat.toLocaleDateString('en-US', {month: 'long', weekday: 'long', day: '2-digit', year: 'numeric'})
    const startTimeStr = startTimeFormat.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'})

    const endTimeFormat = new Date(end_time)
    const endTimeStr = endTimeFormat.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'})


    if(!venue){
        return <p>....loading</p>
    }

    const handleEventUpdateClick = (attr)=>{
        setAttrSelect(attr)
        setUpdateOpen(!updateOpen)
    }

    const handleUpdateCancel = ()=>{
        setAttrSelect(null)
        setUpdateOpen(false)
    }

    const handleUpdateSubmit = async (inputResult)=>{

        const updatedEvent = {...event, [attrSelect]: inputResult}
        
        const res = await fetch(`/api/event_by_id/${event.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updatedEvent)
        })

        const eventData = await res.json()

        if(!res.ok){
            console.log('error', eventData.error)
       
        } else {
            console.log('update state here', eventData)
        }

        updateEvent(eventData)
        setAttrSelect(null)
        setUpdateOpen(false)
    }

    const handleEventDelete = ()=>{
        fetch(`api/event_by_id/${eventID}`, {
            method: 'DELETE'
        })
        .then((res)=>{
            if(res.ok){
                deleteEvent(eventID)
            } else {
                console.error(res.error)
            }
        })
    }

    return (
        <div className='dark:bg-gray-700 dark:text-ivory w-full max-w-[1400px] rounded mx-2 my-2 p-2 gap-8'>
            {updateOpen && (

                <UpdateEventForm 
                    onSubmitUpdate={handleUpdateSubmit}
                    onUpdateCancel={handleUpdateCancel}
                    attrSelect={attrSelect}
                />
                
            )}
            <div className='my-4 font-semibold text-2xl'>
                <h2>Event</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg: lg:grid-cols-3 xl:grid-cols-5 gap-2'>
                <div className='border p-2 rounded-sm'>
                    <h2><span className='font-semibold'>ID: </span>{eventID}</h2>
                </div>
                <div className='border p-2 rounded-sm'>
                    <p><span className='font-semibold'>Name: </span>
                        <button 
                            onClick={()=>handleEventUpdateClick('name')}    
                            className='hover:bg-slate-950'
                        >
                            {name}
                        </button>
                    </p>
                </div>
                <div className='border p-2 rounded-sm'>
                    <p><span className='font-semibold'>Date: </span>{startDateStr}</p>
                </div>
                <div className='border p-2 rounded-sm'>
                    <p><span className='font-semibold'>Start Time: </span>{startTimeStr}</p>
                </div>
                <div className='border p-2 rounded-sm'>
                    <p><span className='font-semibold'>End Time: </span>{endTimeStr}</p>
                </div>
                <div className='border p-2 rounded-sm'>
                    <p><span className='font-semibold'>Tickets Sold: </span>{event.current_total}</p>
                </div>
            </div>
            <div className='my-4 border p-2 rounded-sm'>
                <div className='mb-4'>
                    <p><span className='font-semibold'>Description: </span>
                        <button 
                            onClick={()=>handleEventUpdateClick('description')}    
                            className='hover:bg-gray-950 p-1'
                        >
                            {description}
                        </button>
                    </p>
                </div>
                <div>
                    <p className='flex gap-4'><span className='font-semibold'>Image: </span>
                        <button 
                            onClick={()=>handleEventUpdateClick('image')}    
                            className='hover:bg-gray-950 p-1'
                        >
                            <img src={image} alt={`image for ${name} event`} className='w-[100px] h-[100px]'/>
                        </button>
                    </p>
                </div>
            </div>
            <hr className='h-[2px] border-0 bg-transparent border-t-2 border-gray-800 w-full my-8' />
            {/* venue */}
            <div className='my-4 font-semibold text-2xl'>
                <h2>Event Venue</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg: lg:grid-cols-3 xl:grid-cols-4 gap-2'>
                <div className='border p-2 rounded-sm'>
                    <h2><span className='font-semibold'>ID: </span>{venue.id}</h2>
                </div>
                <div className='border p-2 rounded-sm'>
                    <p><span className='font-semibold'>Name: </span>{venue.name}</p>
                </div>
                <div className='border p-2 rounded-sm'>
                    <p><span className='font-semibold'>Street: </span>{venue.street}</p>
                </div>
                <div className='border p-2 rounded-sm'>
                    <p><span className='font-semibold'>City: </span>{venue.city}</p>
                </div>
                <div className='border p-2 rounded-sm'>
                    <p><span className='font-semibold'>State: </span>{venue.state}</p>
                </div>
                <div className='border p-2 rounded-sm'>
                    <p><span className='font-semibold'>Zip: </span>{venue.zip}</p>
                </div>
                <div className='border p-2 rounded-sm'>
                    <p><span className='font-semibold'>Capacity: </span>{venue.capacity}</p>
                </div>
            </div>
            <div className='border p-2 rounded-sm my-2'>
                <p><span className='font-semibold'>Description: </span>{venue.description}</p>
            </div>
            <div className='flex justify-center align-center mt-10 p-4'>
                <button className='border-red-700 p-2 border-2 hover:bg-red-950 rounded-sm' onClick={handleEventDelete}>Delete Event</button>
            </div>
        </div>
    );
}

export default AdminEventCard;