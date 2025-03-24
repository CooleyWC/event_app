import React from 'react';
import {useNavigate} from 'react-router-dom'
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";

import Carousel from './ui/Swiper/Carousel';


function Layout() {

    let navigate = useNavigate()


    const handleGetStartedClick = ()=>{
        navigate('/login')
    }

    return (
        <>
        <div className='mt-18  h-screen  bg-ivory dark:bg-gray-800 text-slate-800'>
            {/* hero */}
            <div className='pt-32 md:pt-44 px-4 lg:pt-52 lg:px-10 w-full flex flex-col lg:flex-row gap-4 '>
                <section className='w-full lg:w-[80%] xl:w-[70%] mx-auto flex flex-col gap-2 lg:gap-8'>
                    <h1 className='text-2xl md:text-4xl lg:text-5xl xl:text-8xl text-center font-mulish font-bold dark:text-ivory '>PARLOR STAGES</h1>
                    <h2 className='mx-6 md:mx-8 lg:mx-12 xl:mx-24 text-xl xl:text-4xl font-semibold text-center font-mulish dark:text-ivory'>Bring the Magic of Intimate Performances to Your Space</h2>
                    <p className='mx-6 md:mx-8 lg:mx-12 xl:mx-24 font-mulish text-lg dark:text-ivory '>Experience the charm and elegance of early 20th-century parlor concerts with Parlor Stages. Whether you're hosting a cozy gathering or organizing a unique event, our platform makes it easy to connect with performers and create unforgettable experiences in the comfort of your home or a special venue. From solo recitals to small ensemble performances, rediscover the personal touch of live music. Host, attend, and enjoy concerts the way they were meant to be—up close and personal.</p>
                </section>
                <picture className='lg:w-[70%] mx-auto'>
                    <img 
                        src='../src/assets/images/living-room.png' alt='living room with guitar' 
                        className='object-cover max-w-full rounded-xl'
                        />
                </picture>
            </div>
            {/* info cards */}
            <div className='bg-gray-300 mx-auto max-w-[1600px] w-full mt-14'>
                <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center'>
                    <div className='py-6'>
                        <h3 className='text-center text-lg font-semibold mb-4'>Discover</h3>
                        <p className='w-[70%] mx-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, minima alias aperiam beatae esse dignissimos.</p>
                    </div>
                    <div className='py-6'>
                        <h3 className='text-center text-lg font-semibold mb-4'>Find</h3>
                        <p className='w-[70%] mx-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, minima alias aperiam beatae esse dignissimos.</p>
                    </div>
                    <div className='py-6'>
                        <h3 className='text-center text-lg font-semibold mb-4'>Invite</h3>
                        <p className='w-[70%] mx-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, minima alias aperiam beatae esse dignissimos.</p>
                    </div>
                    <div className='py-6'>
                        <h3 className='text-center text-lg font-semibold mb-4'>Enjoy</h3>
                        <p className='w-[70%] mx-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, minima alias aperiam beatae esse dignissimos.</p>
                    </div>
                </section>
                <div className='bg-gray-400 w-full flex justify-center py-4'>
                    <button onClick={handleGetStartedClick} className='bg-gray-800 text-white font-bold py-2 px-4 mr-2 border-solid rounded border-ivory border hover:bg-gray-950 hover:text-white transition ease-in-out'>Get Started</button>
                </div>
            </div>
            {/* review carousel */}
            <div className='h-[400px] bg-gray-200 pt-4'>
                <div >
                    <h1 className='text-center text-2xl font-semibold'>Recent Feedback</h1>
                    <Carousel />
                </div>
            </div>
            {/* footer */}
            <footer className='bg-gray-950 text-white flex flex-col sm:flex-row justify-between px-10'>
                <div className='my-8'>
                    <h5 className='font-bold text-lg mb-4'>How it works</h5>
                    <a className='block text-sm'>FAQ for Artists and Presenters</a>
                    <a className='block text-sm'>FAQ for Hosts and Venues</a>
                </div>
                <div className='my-8'>
                    <h5 className='font-semibold mb-4'>About Us</h5>
                    <a className='block text-sm'>Blog</a>
                    <a className='block text-sm'>Jobs</a>
                    <a className='block text-sm'>Press</a>
                </div>
                <div className='my-8'>
                    <div className='flex flex-row gap-8 mb-4'>
                        <FaInstagram className='text-2xl'/>
                        <FaFacebook className='text-2xl'/>
                        <FaYoutube className='text-2xl'/>
                    </div>
                    <div>
                        <label>Signup for our newsletter</label>
                        <input className='block'/>
                    </div>
                    
                </div>
            </footer>
        </div> 
        </>
    );
}

export default Layout;
