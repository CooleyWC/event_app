import React, {useState} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {IoMenu, IoSunnyOutline, IoMoonOutline, IoPersonOutline } from "react-icons/io5"
import { useAuth } from '../context/AuthProvider';
import ProfileDrawer from '../pages/ProfileDrawer';

function NavBar({toggleSideDrawer, toggleDarkMode, darkMode, toggleProfileDrawer, profileOpen}) {

    const {user} = useAuth();
    const nameDisplay = user?.first_name + ' ' + user?.last_name

    const [toggleTopnav, setToggleTopnav] = useState(false)

    const location = useLocation()

    const handleTopnavToggle = ()=>{
        console.log('toggle')
    }

    let homePage = ''
    if(location.pathname === '/'){
        homePage = true
    } else {
        homePage = false
    }


    return (
        <>
        <nav className='fixed top-0 z-50 w-full bg-white dark:bg-gray-950 text-black dark:text-ivory'>
            <div className='px-3 py-3 sm:py-5'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-start rtl:justify-end'>
                        {location.pathname !== '/' && (
                            <button
                            className='inline-flex items-center p-2 text-sm sm:hidden'
                            onClick={toggleSideDrawer}
                        >
                            <IoMenu className='text-2xl' onClick={handleTopnavToggle}/>
                        </button>
                        )}
                        <div className='flex ms-2 md:me-24'>
                            <NavLink to='/'>
                                <img src='./src/assets/images/parlor_logo_2.png' className='w-20 h-full'/>
                            </NavLink>
                        </div>
                    </div>
                    <div className='space-x-5 flex flex-row items-center sm:gap-4 mr-2'>
                        {user ? (
                            <>
                                <button
                                    onClick={toggleDarkMode}
                                    aria-label={darkMode ? "Switch to light mode." : "Switch to dark mode."}
                                    className='p-1 sm:p-4 rounded-sm hover:bg-slate-200 dark:hover:bg-slate-900 transition ease-in-out duration-300'
                                >
                                    {darkMode ? <IoSunnyOutline className='size-8 text-black dark:text-ivory'/> : <IoMoonOutline className='size-8 text-black dark:text-ivory' />}
                                </button>
                                
                                <NavLink 
                                    to='/dashboard'
                                    className='text-lg p-1 rounded-sm sm:p-4 text-black hover:bg-slate-200 dark:text-ivory dark:hover:bg-slate-900 transition ease-in-out duration-300'
                                >
                                    Dashboard
                                </NavLink>
                                <button onClick={toggleProfileDrawer} aria-label='Open profile drawer'>
                                    <div className='flex gap-2 items-center rounded-sm  text-black hover:bg-slate-200 dark:text-ivory dark:hover:bg-slate-900 p-1 sm:p-4 transition ease-in-out duration-300'>
                                        <IoPersonOutline className='size-8'/>
                                        <span className='hidden sm:block text-lg'>{nameDisplay}</span>
                                    </div>
                                </button>
                            </>
                        ):(
                            <>
                                <NavLink 
                                    className='text-black dark:text-ivory p-1 sm:p-4'
                                    to='/login'
                                >
                                    Login
                                </NavLink>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <ProfileDrawer
                toggleProfileDrawer={toggleProfileDrawer} 
                profileOpen={profileOpen}
            />
        </nav>
        </>
    );
}

export default NavBar;

