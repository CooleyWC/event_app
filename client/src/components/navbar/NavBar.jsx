import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import {IoClose, IoMenu} from "react-icons/io5"
import { useAuth } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

function NavBar({toggleSideDrawer}) {

    const {user, logout} = useAuth();

    let navigate = useNavigate();

    const onLogoutClick = async ()=>{
        try{
            const res = await fetch('/api/logout',{
                method: 'DELETE',
            })
            if (!res.ok){
                console.log('logout failed')
            }
            console.log('logout successful')
            logout()
            navigate('/')
        } catch (error){
            console.log(error.message)
            return error
        }
    }

    return (
        <>
        <nav className='fixed top-0 z-50 w-full bg-dark-blue text-white'>
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
                    <div className='space-x-3'>
                        {user ? (
                            <>
                                <NavLink to='/dashboard'
                                    
                                >
                                    Dashboard
                                </NavLink>
                                <NavLink to='/'
                                    onClick={onLogoutClick}
                                >
                                    Logout
                                </NavLink>
                            </>
                        ):(
                            <>
                                <NavLink 
                                    to='/login'
                                >Login</NavLink>
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

