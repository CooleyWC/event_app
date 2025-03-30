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
import ManageEvents from './ManageEvents';

function Dashboard({sideOpen, toggleSideDrawer, closeDrawer, allEvents, toggleProfileDrawer, profileOpen, handleNewEvent}) {

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
                image={ticket.event.image}
                venue={ticket.event.venue}
            />
        )
    })


    return (
        <div className='bg-ivory dark:bg-la-gray-med'>
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
                    userTickets.length !== 0 ? (
                        <>
                            <div className='pt-2 flex justify-center'>
                                <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2'>
                                    {upcomingEvents}
                                </div>
                            </div>
                        </>
                    ) : (
                        <p className='mt-44 text-la-gray-med dark:text-white flex justify-center text-2xl'>You don't have any upcoming events.</p>
                    )
                    )}
                    {section==='create_event' && (
                        <CreateEvent handleNewEvent={handleNewEvent}/>
                    )}
                    {section==='manage_events' && (
                        <ManageEvents/>
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

