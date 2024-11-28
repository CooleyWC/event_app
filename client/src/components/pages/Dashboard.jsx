import React from 'react';
import SideDrawer from './SideDrawer';
import { useAuth} from '../context/AuthProvider'
import {useParams} from 'react-router-dom'
import Main from '../../ui/Main';
import Content from '../../ui/Content';
import EventCard from '../cards/EventCard';
import Search from '../forms/Search';
import Profile from '../cards/Profile';
import CreateEvent from '../forms/CreateEvent';

function Dashboard({sideOpen, toggleSideDrawer, closeDrawer}) {

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
                <Content>
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
                        <Search />
                    )}
                </Content>
            </Main>
        </div>
    );
}

export default Dashboard;

