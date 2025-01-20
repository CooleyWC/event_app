import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';


const navLinks = [
    {
        title: 'Profile',
        href: 'profile',
    }
]

function ProfileDrawer({profileOpen, toggleProfileDrawer}) {

    let navigate = useNavigate()
    const {logout} = useAuth()

    const onLinkClick = (e)=>{
        e.preventDefault()
        const clickedLink = e.currentTarget.getAttribute('section-ref');
        navigate(`/dashboard/${clickedLink}`);
        toggleProfileDrawer()
    }

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
        profileOpen && (
        <div className={`fixed top-0 right-0 z-40 w-52 pt-20 bg-white dark:bg-dark-blue border-l dark:border-ivory border-dark-blue sm:translate-x-0 transition-transform ${profileOpen ? 'translate-x-0' : 'translate-x-full'} `}
            role='dialog'
            aria-modal='true'
            aria-label='profile drawer'
        >
            <ul className='dark:text-ivory text-black' >
                {navLinks.map(({title, href})=>(
                    <li key={title} 
                        section-ref={href} 
                        className='py-2 px-4 cursor-pointer text-black dark:text-ivory hover:bg-slate-200  dark:hover:bg-slate-900 '
                        onClick={onLinkClick}
                        >
                        
                        <a href={href} className='focus:outline-none focus:ring-2 focus:ring-blue-400'>
                            {title}
                        </a>
                    </li>
                ))}
                <li className='py-2 px-4 cursor-pointer text-black dark:text-ivory hover:bg-slate-200  dark:hover:bg-slate-900'>
                    <button onClick={onLogoutClick}>Logout</button>
                </li>
            </ul>
        </div>
    )
    );
}

export default ProfileDrawer;