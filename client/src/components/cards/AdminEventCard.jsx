import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import UpdateEventForm from '../forms/UpdateEventForm'

function AdminEventCard({eventID, eventName, startTime, endTime, description, image, venue, event}) {


    const {user} = useAuth();
    const [updateOpen, setUpdateOpen] = useState(false)
    const [attrSelect, setAttrSelect] = useState(null)

    const startTimeFormat = new Date(startTime)
    const startDateStr = startTimeFormat.toLocaleDateString('en-US', {month: 'long', weekday: 'long', day: '2-digit', year: 'numeric'})
    const startTimeStr = startTimeFormat.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'})

    const endTimeFormat = new Date(endTime)
    const endTimeStr = endTimeFormat.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'})

    if(!venue){
        return <p>....loading</p>
    }

    const handleEventNameClick = (attr)=>{
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
            <div className='grid grid-cols-1 md:grid-cols-2 lg: lg:grid-cols-3 xl:grid-cols-5 '>
                <div>
                    <h2><span className='font-semibold'>ID: </span>{eventID}</h2>
                </div>
                <div>
                    <p><span className='font-semibold'>Name: </span>
                        <button 
                            onClick={()=>handleEventNameClick('name')}    
                            className='hover:bg-slate-950'
                        >
                            {eventName}
                        </button>
                    </p>
                </div>
                <div>
                    <p><span className='font-semibold'>Start Time: </span>{startTimeStr}</p>
                </div>
                <div>
                    <p><span className='font-semibold'>End Time: </span>{endTimeStr}</p>
                </div>
                <div>
                    <p><span className='font-semibold'>Tickets Sold: </span>{event.current_total}</p>
                </div>
            </div>
            <div className='my-4'>
                <div className='mb-4'>
                    <p><span className='font-semibold'>Description: </span>{description}</p>
                </div>
                <div>
                    <p><span className='font-semibold'>Image URL: </span>{image}</p>
                </div>
            </div>
            <hr className='h-[0.5px] bg-white w-full my-2' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg: lg:grid-cols-3 xl:grid-cols-4 '>
                <div>
                    <h2><span className='font-semibold'>ID: </span>{venue.id}</h2>
                </div>
                <div>
                    <p><span className='font-semibold'>Name: </span>{venue.name}</p>
                </div>
                <div>
                    <p><span className='font-semibold'>Street: </span>{venue.street}</p>
                </div>
                <div>
                    <p><span className='font-semibold'>City: </span>{venue.city}</p>
                </div>
                <div>
                    <p><span className='font-semibold'>State: </span>{venue.state}</p>
                </div>
                <div>
                    <p><span className='font-semibold'>Zip: </span>{venue.zip}</p>
                </div>
                <div>
                    <p><span className='font-semibold'>Capacity: </span>{venue.capacity}</p>
                </div>
            </div>
            <div>
                <p><span className='font-semibold'>Description: </span>{venue.description}</p>
            </div>
        </div>
    );
}

export default AdminEventCard;