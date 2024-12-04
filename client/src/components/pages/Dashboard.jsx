import React from 'react';
import SideDrawer from './SideDrawer';
import { useAuth} from '../context/AuthProvider'
import {useParams} from 'react-router-dom'
import Main from '../../ui/Main';
// import Content from '../../ui/Content';
import EventCard from '../cards/EventCard';
import Search from '../forms/Search';
import Profile from '../cards/Profile';
import CreateEvent from '../forms/CreateEvent';
import EventList from './EventList';

function Dashboard({sideOpen, toggleSideDrawer, closeDrawer, allEvents}) {

    const {user} = useAuth();

    const {section} = useParams();

    if(user===null || !user){
        return <p>loading...</p>
    }
    console.log('section', section)
    return (
        <div>
            <SideDrawer 
                sideOpen={sideOpen} 
                toggleSideDrawer={toggleSideDrawer}
                closeDrawer={closeDrawer}/>
            <Main>
                <div>
                {/* <Content> */}
                    {(!section || section==='profile') && (
                        <Profile />
                    )}
                    {section==='upcoming_events' && (
                        <EventCard />
                    )}
                    {section==='past_events' && (
                        <EventCard />
                    )}
                    {section==='create_event' && (
                        <CreateEvent />
                    )}
                    {section==='find_events' && (
                        <EventList allEvents={allEvents}/>
                    )}
                </div>
                {/* </Content> */}
            </Main>
        </div>
    );
}

export default Dashboard;

