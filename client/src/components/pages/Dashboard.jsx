import React from 'react';
import SideDrawer from './SideDrawer';
import ProfileDrawer from './ProfileDrawer';
import { useAuth} from '../context/AuthProvider'
import {useParams} from 'react-router-dom'
import Main from '../../ui/Main';
// import Content from '../../ui/Content';
import EventCard from '../cards/EventCard';
// import Search from '../forms/Search';
import ProfileCard from '../cards/ProfileCard';
import CreateEvent from '../forms/CreateEvent';
import EventList from './EventList';

function Dashboard({sideOpen, toggleSideDrawer, closeDrawer, allEvents, toggleProfileDrawer, profileOpen}) {

    const {user} = useAuth();

    const {section} = useParams();

    if(user===null || !user){
        return <p>loading...</p>
    }

    const userTickets = user?.tickets || [];

    const upcomingEvents = userTickets.map((ticket)=>{

        return (
            <EventCard 
                key={ticket.id}
                eventID={ticket.event.id}
                eventName={ticket.event.name}
                description={ticket.event.description}
                startTime={ticket.event.start_time}
                endTime={ticket.event.end_time}
            />
        )
    })

    console.log('section', section)

    return (
        <div className='bg-ivory dark:bg-periwinkle'>
            <SideDrawer 
                sideOpen={sideOpen} 
                toggleSideDrawer={toggleSideDrawer}
                closeDrawer={closeDrawer}/>
            <ProfileDrawer
                toggleProfileDrawer={toggleProfileDrawer} 
                profileOpen={profileOpen}
            />
            <Main>
                <div>
                {/* <Content> */}
                    {(!section || section==='find_events') && (
                        <EventList allEvents={allEvents}/>
                    )}
                    {section==='upcoming_events' && (
                        <div>{upcomingEvents}</div>
                    )}
                    {section==='create_event' && (
                        <CreateEvent />
                    )}
                    {section==='profile' && (
                        <ProfileCard 
                            key={user.id}
                            user={user}
                            firstName={user.first_name}
                            lastName={user.last_name}
                            location={user.location}
                        />
                    )}
                </div>
                {/* </Content> */}
            </Main>
        </div>
    );
}

export default Dashboard;

