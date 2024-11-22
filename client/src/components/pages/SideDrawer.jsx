import React from 'react';
import { NavLink } from 'react-router-dom';

function SideDrawer() {
    return (
        <div>
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