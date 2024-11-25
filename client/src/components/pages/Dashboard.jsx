import React from 'react';
import SideDrawer from './SideDrawer';
import { useAuth} from '../context/AuthProvider'
import {useParams} from 'react-router-dom'


function Dashboard({dropdownOpen, sideOpen}) {

    const {user} = useAuth();

    const {section} = useParams();

    if(user===null || !user){
        return <p>loading...</p>
    }

    return (
        <div>
            <SideDrawer />
        </div>
    );
}

export default Dashboard;


// <div className='sm:grid grid-cols-[200px_1fr] w-full h-screen'>
//             {/* sidedrawer */}
//             <div className={`w-full h-screen ${sideOpen ? 'fixed bg-sky-400 md:hidden' : 'h-screen bg-indigo-800 hidden sm:relative sm:block text-zinc-200'}`}
//             >
//                 <SideDrawer />
//             </div>

//             {/* content area */}
//             <div className='p-4'>
//             {!section && (
//                 <div className='text-center'>
//                     <h1>No selection - content area empty</h1>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quae aut sit explicabo recusandae voluptatem sapiente illo, aliquam laboriosam! Eos corrupti sunt nobis eum neque error, iure assumenda labore quas.</p>
//                 </div>
//             )}
//             {section === 'upcoming_events' && (
//                 <div className='text-center'>
//                     <h1>Upcoming Events</h1>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quae aut sit explicabo recusandae voluptatem sapiente illo, aliquam laboriosam! Eos corrupti sunt nobis eum neque error, iure assumenda labore quas.</p>
//                 </div>
//             )}
//             {section === 'past_events' && (
//                 <div>
//                     <h1 className='text-center'>Past Events</h1>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quae aut sit explicabo recusandae voluptatem sapiente illo, aliquam laboriosam! Eos corrupti sunt nobis eum neque error, iure assumenda labore quas.</p>
//                 </div>
//             )}
//             {section === 'find_events' && (
//                 <div>
//                     <h1 className='text-center'>Find Events</h1>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quae aut sit explicabo recusandae voluptatem sapiente illo, aliquam laboriosam! Eos corrupti sunt nobis eum neque error, iure assumenda labore quas.</p>
//                 </div>
//             )}
//             {section === 'create_event' && (
//                 <div>
//                     <h1 className='text-center'>Create Event</h1>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quae aut sit explicabo recusandae voluptatem sapiente illo, aliquam laboriosam! Eos corrupti sunt nobis eum neque error, iure assumenda labore quas.</p>
//                 </div>
//             )}
//             {section === 'profile' && (
//                 <div>
//                     <h1 className='text-center'>Profile</h1>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quae aut sit explicabo recusandae voluptatem sapiente illo, aliquam laboriosam! Eos corrupti sunt nobis eum neque error, iure assumenda labore quas.</p>
//                 </div>
//             )}

//         </div>