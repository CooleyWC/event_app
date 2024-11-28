import React from 'react';
import SideDrawer from './SideDrawer';
import { useAuth} from '../context/AuthProvider'
import {useParams} from 'react-router-dom'
import Main from '../../ui/Main';
import Content from '../../ui/Content';
import EventCard from '../cards/EventCard';
import Search from './Search';
import Profile from '../cards/Profile';

function Dashboard({sideOpen, toggleSideDrawer, closeDrawer}) {

    const {user} = useAuth();

    // const {section} = useParams();

    if(user===null || !user){
        return <p>loading...</p>
    }
    return (
        <div>
            <SideDrawer 
            sideOpen={sideOpen} 
            toggleSideDrawer={toggleSideDrawer}
            closeDrawer={closeDrawer}/>
            <Main>
                <Content>
                    <EventCard />
                    <Search />
                    <Profile />
                </Content>
            </Main>
        </div>
    );
}

export default Dashboard;

