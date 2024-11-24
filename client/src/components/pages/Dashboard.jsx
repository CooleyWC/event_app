import React from 'react';
import SideDrawer from './SideDrawer';
import { useAuth} from '../context/AuthProvider'
import {useParams} from 'react-router-dom'


function Dashboard({dropdownOpen}) {

    const {user} = useAuth();

    const {section} = useParams();


    return (
        <div className='sm:grid grid-cols-[200px_1fr] w-full h-screen'>
            {dropdownOpen ? (
                <div className='w-full h-screen fixed bg-sky-400 md:hidden'>
                     <SideDrawer />
                </div>
            ) : (
                <div className='h-screen bg-indigo-800 hidden sm:block text-zinc-200'>
                    <SideDrawer />
                </div>
            )
        }
            <div className='p-4 overflow-auto'>
            {!section && (
                <div className='text-center'>
                    <h1>No selection - content area empty</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quae aut sit explicabo recusandae voluptatem sapiente illo, aliquam laboriosam! Eos corrupti sunt nobis eum neque error, iure assumenda labore quas.</p>
                </div>
            )}
            {section === 'upcoming_events' && (
                <div className='text-center'>
                    <h1>Upcoming Events</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quae aut sit explicabo recusandae voluptatem sapiente illo, aliquam laboriosam! Eos corrupti sunt nobis eum neque error, iure assumenda labore quas.</p>
                </div>
            )}
            {section === 'past_events' && (
                <div>
                    <h1 className='text-center'>Past Events</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quae aut sit explicabo recusandae voluptatem sapiente illo, aliquam laboriosam! Eos corrupti sunt nobis eum neque error, iure assumenda labore quas.</p>
                </div>
            )}
            {section === 'find_events' && (
                <div>
                    <h1 className='text-center'>Find Events</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quae aut sit explicabo recusandae voluptatem sapiente illo, aliquam laboriosam! Eos corrupti sunt nobis eum neque error, iure assumenda labore quas.</p>
                </div>
            )}
            {section === 'create_event' && (
                <div>
                    <h1 className='text-center'>Create Event</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quae aut sit explicabo recusandae voluptatem sapiente illo, aliquam laboriosam! Eos corrupti sunt nobis eum neque error, iure assumenda labore quas.</p>
                </div>
            )}
            {section === 'profile' && (
                <div>
                    <h1 className='text-center'>Profile</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quae aut sit explicabo recusandae voluptatem sapiente illo, aliquam laboriosam! Eos corrupti sunt nobis eum neque error, iure assumenda labore quas.</p>
                </div>
            )}

        </div>
        </div>
    );
}

export default Dashboard;