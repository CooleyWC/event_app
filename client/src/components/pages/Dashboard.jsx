import React from 'react';
import SideDrawer from './SideDrawer';
import { useAuth} from '../context/AuthProvider'

function Dashboard({dropdownOpen}) {
    console.log('from dashboard', dropdownOpen)

    const {user} = useAuth();

    
    return (
        <div>
            <h2>Dashboard</h2>

            {user && (
                <div className='w-64 bg-green-200 hidden sm:fixed sm:block'>
                <SideDrawer />
            </div>
            )}
            
        </div>
    );
}

export default Dashboard;