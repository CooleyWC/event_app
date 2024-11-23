import React from 'react';
import SideDrawer from './SideDrawer';
import { useAuth} from '../context/AuthProvider'
import {useParams} from 'react-router-dom'


function Dashboard({dropdownOpen}) {

    const {user} = useAuth();

    const {section} = useParams();

    const sideWidth = 64

    
    return (
        <div>
            {user && (
                <div className='w-44 h-screen bg-indigo-800 text-zinc-200 hidden sm:fixed sm:block'>
                    <SideDrawer />
                </div>
            )}
            {user && dropdownOpen && (
                <div className='w-full h-screen fixed bg-sky-400 md:hidden'>
                    <SideDrawer />
                </div>
            )}

            {!section && (
                <div>
                    <h1 className='text-center'>No selection - content area empty</h1>
                </div>
            )}
            {section === 'upcoming_events' && (
                <div>
                    <h1 className='text-center'>Upcoming Events</h1>
                </div>
            )}
            {section === 'past_events' && (
                <div>
                    <h1 className='text-center'>Past Events</h1>
                </div>
            )}
            {section === 'find_events' && (
                <div>
                    <h1 className='text-center'>Find Events</h1>
                </div>
            )}
            {section === 'create_event' && (
                <div>
                    <h1 className='text-center'>Create Event</h1>
                </div>
            )}
            {section === 'profile' && (
                <div>
                    <h1 className='text-center'>Profile</h1>
                </div>
            )}

            
        </div>
    );
}

export default Dashboard;