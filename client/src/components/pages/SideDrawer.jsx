import React from 'react';
import { useNavigate } from 'react-router-dom';

const navLinks = [
    {
        title: 'Upcoming Events',
        href: 'upcoming_events',
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
        title: 'Manage Events',
        href: 'manage_events',
    },
]


function SideDrawer({sideOpen}) {

    let navigate = useNavigate();

    const onLinkClick = (e)=>{
        const clickedLink = e.target.getAttribute('section-ref');
        navigate(`/dashboard/${clickedLink}`);
        
    }


    return (
        // pt-20 is responsible for making sure the links do not overlap with the navbar
        <div className={`fixed border-r-2 border-indigo-200 border-r-gray-600 top-10 left-0 z-40 w-64 h-screen pt-20 bg-white dark:bg-la-gray sm:translate-x-0 transition-transform ${sideOpen ? "translate-x-0": "-translate-x-full"}`}>
            <ul className='dark:text-ivory text-black' onClick={onLinkClick}>
                {navLinks.map(({title, href})=>(
                    <li key={title} 
                        section-ref={href} 
                        className='py-2 px-4 cursor-pointer text-black dark:text-ivory hover:bg-slate-200  dark:hover:bg-la-gray-dark '>
                        {title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SideDrawer;