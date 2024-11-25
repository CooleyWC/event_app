import React from 'react';
import { useNavigate } from 'react-router-dom';

const navLinks = [
    {
        title: 'Upcoming Events',
        href: 'upcoming_events',
    },
    {
        title: 'Past Events',
        href: 'past_events',
    },
    {
        title: 'Find Events',
        href: 'find_events',
    },
    {
        title: 'Create Event',
        href: 'create_event',
    },
    {
        title: 'Profile',
        href: 'profile',
    }
]


function SideDrawer({sideOpen}) {

    let navigate = useNavigate();

    const onLinkClick = (e)=>{
     
        const clickedLink = e.target.getAttribute('section-ref');
        navigate(`/dashboard/${clickedLink}`);
        
    }


    return (
        <div className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 transition-transform ${sideOpen ? "translate-x-0": "-translate-x-full"}`}>
            <ul className='text-slate-300' onClick={onLinkClick}>
                {navLinks.map(({title, href})=>(
                    <li key={title} 
                        section-ref={href} 
                        className='py-2 px-4 cursor-pointer hover:bg-indigo-950 '>
                        {title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SideDrawer;