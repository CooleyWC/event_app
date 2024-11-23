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


function SideDrawer() {

    let navigate = useNavigate();

    const onLinkClick = (e)=>{
        const clickedLink = e.target.getAttribute('section-ref')
        navigate(`/dashboard/${clickedLink}`)
    }


    return (
        <div >
            <ul onClick={onLinkClick}>
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