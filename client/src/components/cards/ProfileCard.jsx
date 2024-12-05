import React from 'react';

function ProfileCard({user, firstName, lastName, location}) {
    return (
        <div className='bg-slate-200 flex justify-center flex-col'>
            <h1 className='m-auto'>{firstName} {lastName}</h1>
            <p className='m-auto'>{location}</p>
            
        </div>
    );
}

export default ProfileCard;