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
        <nav className='fixed h-[64px] top-0 z-50 w-full bg-slate-400'>
            <div className='px-3 py-3'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-start rtl:justify-end'>
                        <button
                            className='inline-flex items-center p-2 text-sm sm:hidden'
                            onClick={toggleSideDrawer}
                        >
                            <IoMenu className='text-2xl'/>
                        </button>
                        <div className='flex ms-2 md:me-24'>
                            <NavLink to='/'>
                                Logo
                            </NavLink>
                        </div>
                    </div>
                    <div className='space-x-2'>
                        {user ? (
                            <div>
                                <NavLink to='/'
                                    onClick={onLogoutClick}
                                >
                                    Logout
                                </NavLink>
                            </div>
                        ):(
                            <div>
                                <NavLink 
                                    to='/login'
                                >Login</NavLink>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </nav>
        </>
    );
}

export default NavBar;



// <header className='flex justify-between bg-slate-200'
//         >
//             <section className=" p-2 sm:p-0 items-center">
//                 <div>
//                     {/* if user is logged in and the screen size is less than tablet
//                     display the hamburger
//                     - make sure if the hamburger is clicked, the dropdown
//                     will show the sidedrawer links
//                     */}
//                     {user ? (
//                         <>
//                         <div className='sm:hidden'>
//                             <IoMenu 
//                                 onClick={handleDropdown}
//                                 className='hover:cursor-pointer'
//                             />
//                         </div>
//                         <div className='hidden sm:block'>
//                             <NavLink to='/'>Event App</NavLink>
//                         </div>
//                         </>
//                         ):(          
//                             <NavLink to='/'>Event App</NavLink>
//                     )}
                    
//                 </div>
//             </section>
//                 <div className='flex justify-end items-center'>
//                     {user ? (
//                         <>
//                         <NavLink className='block px-4'>Avatar</NavLink>
//                         <button
//                             className='block px-4'
//                             onClick={onLogoutClick}
//                         >
//                             Logout</button>
//                         </>
//                     ) : (
//                         <>
//                         <NavLink 
//                             className='block px-4'
//                             to='/login'
//                         >Login</NavLink>
//                         </>
//                     )
//                     }
//                 </div>
       
//         </header>