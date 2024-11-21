import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import {IoClose, IoMenu} from "react-icons/io5"

function NavBar() {

    // const [isOpen, setIsOpen] = useState(false);

    // const handleCloseMenu = () => {
    //     setIsOpen(false)
    // }

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
                    <NavLink className='block px-4'>Avatar</NavLink>
                    <NavLink className='block px-4'>Login/Logout</NavLink>
                </div>
       
        </header>
        </>
    );
}

export default NavBar;