import React from 'react';
import SideDrawer from './SideDrawer';
import { useAuth} from '../context/AuthProvider'
import {useParams} from 'react-router-dom'


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
        </div>
    );
}

export default Dashboard;

