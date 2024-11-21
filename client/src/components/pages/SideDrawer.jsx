import React from 'react';
import { NavLink } from 'react-router-dom';

function SideDrawer() {
    return (
        <div className='w-64 bg-green-200 hidden sm:fixed sm:block'>
            <div>
                <h2>Sidedrawer</h2>
            </div>
            <hr />
            <ul>
                <li>
                    <NavLink>Upcoming Events</NavLink>
                </li>
                <li>
                    <NavLink>Past Events</NavLink>
                </li>
                <li>
                    <NavLink>Find Events</NavLink>
                </li>
                <li>
                    <NavLink>Create an Event</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default SideDrawer;