import React from 'react';
import { NavLink } from 'react-router-dom';
import {IoMenu, IoSunnyOutline, IoMoonOutline, IoPersonOutline } from "react-icons/io5"
import { useAuth } from '../context/AuthProvider';

function NavBar({toggleSideDrawer, toggleDarkMode, darkMode, toggleProfileDrawer}) {

    const {user} = useAuth();
    const nameDisplay = user?.first_name + ' ' + user?.last_name

    return (
        <>
        <nav className='fixed top-0 z-50 w-full bg-white dark:bg-slate-950 text-black dark:text-ivory border-b border-dark-blue dark:border-ivory'>
            <div className='px-3 py-3 sm:py-5'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-start rtl:justify-end'>
                        <button
                            className='inline-flex items-center p-2 text-sm sm:hidden'
                            onClick={toggleSideDrawer}
                        >
                            <IoMenu className='text-2xl' />
                        </button>
                        <div className='flex ms-2 md:me-24'>
                            <NavLink to='/'>
                                <img src='./src/assets/images/parlor_logo.png' className='w-20 h-full'/>
                            </NavLink>
                        </div>
                    </div>
                    <div className='space-x-5 flex flex-row items-center mr-2'>
                        {user ? (
                            <>
                                <button
                                    onClick={toggleDarkMode}
                                    aria-label={darkMode ? "Switch to light mode." : "Switch to dark mode."}
                                >
                                    {darkMode ? <IoSunnyOutline className='size-6 text-black hover:bg-slate-200 dark:text-ivory dark:hover:bg-slate-900'/> : <IoMoonOutline className='size-6 text-black hover:bg-slate-200 dark:text-ivory' />}
                                </button>
                                
                                <NavLink 
                                    to='/dashboard'
                                    className='text-black hover:bg-slate-200 dark:text-ivory dark:hover:bg-slate-900 px-1'
                                >
                                    Dashboard
                                </NavLink>
                                <button onClick={toggleProfileDrawer} aria-label='Open profile drawer'>
                                    <div className='flex items-center  text-black hover:bg-slate-200 dark:text-ivory dark:hover:bg-slate-900'>
                                        <IoPersonOutline className='size-6'/>
                                        <span className='display-block'>{nameDisplay}</span>
                                    </div>
                                </button>
                            </>
                        ):(
                            <>
                                <NavLink 
                                    className='text-black dark:text-ivory'
                                    to='/login'
                                >
                                    Login
                                </NavLink>
                            </>
                        )}
                    </div>
                </div>
            </div>

        </nav>
        </>
    );
}

export default NavBar;

