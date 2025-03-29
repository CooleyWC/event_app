import React from 'react';

function ProfileCard({user, firstName, lastName, location}) {

    console.log('user', user)

    const numOfTickets = user.tickets.length
    const numOfEvents = user.created_events.length
    return (
        <div className='pt-10 flex justify-center flex-col text-la-gray-med dark:text-white gap-4'>
            <div>
                <h1 className='text-4xl block text-center font-semibold'>{firstName} {lastName}</h1>
                <p className='block text-center text-2xl'>{location}</p>
            </div>
            <div>
                <p className='text-center'>Number of tickets purchased: {numOfTickets} </p>
                <p className='text-center'>Number of events created: {numOfEvents} </p>
            </div>
            
        </div>
    );
}

export default ProfileCard;