import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import {IoClose, IoMenu} from "react-icons/io5"

function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const handleCloseMenu = () => {
        setIsOpen(false)
    }

    return (
        <>
        <header className='sm:flex sm:justify-between sm:items-center sm:p-4 bg-slate-200'
        >
            <section className="flex justify-between p-4 sm:p-0 items-center">
                <div>
                    <NavLink to='/' onClick={handleCloseMenu}>Event App</NavLink>
                </div>
                <div>
                    <button
                        type='button'
                        onClick={()=>setIsOpen(!isOpen)}
                    >
                        {isOpen ? <IoClose /> : <IoMenu />}
                    </button>
                </div>
            </section>
                <div>

                </div>
        </header>
        </>
    );
}

export default NavBar;