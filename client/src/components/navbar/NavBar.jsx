import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import {IoClose, IoMenu} from "react-icons/io5"
import { useAuth } from '../context/AuthProvider';

function NavBar() {

    const {user, logout} = useAuth();

    // const [isOpen, setIsOpen] = useState(false);

    // const handleCloseMenu = () => {
    //     setIsOpen(false)
    // }

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
        } catch (error){
            console.log(error.message)
            return error
        }
    }

    return (
        <>
        <header className='flex justify-between bg-slate-200'
        >
            <section className=" p-2 sm:p-0 items-center">
                <div>
                    <NavLink to='/'>Event App</NavLink>
                </div>
            </section>
                <div className='flex justify-end items-center'>
                    {user ? (
                        <>
                        <NavLink className='block px-4'>Avatar</NavLink>
                        <button
                            className='block px-4'
                            onClick={onLogoutClick}
                        >
                            Logout</button>
                        </>
                    ) : (
                        <>
                        <NavLink 
                            className='block px-4'
                            to='/login'
                        >Login</NavLink>
                        </>
                    )
                    }
                </div>
       
        </header>
        </>
    );
}

export default NavBar;