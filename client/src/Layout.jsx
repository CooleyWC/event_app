import React from 'react';
import {useNavigate} from 'react-router-dom'
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";

import Carousel from './ui/Swiper/Carousel';


function Layout() {

    let navigate = useNavigate()


    const handleGetStartedClick = ()=>{
        navigate('/login')
    }

    const handleNewsletterAdd = (e)=>{
        e.preventDefault()
        console.log('newsletter', e)
    }

    return (
        <>
        <div className='mt-18 min-h-screen bg-la-light-gray-extra-light dark:bg-la-gray text-slate-800'>
            {/* hero */}
            <div className='pt-32 md:pt-44 px-4 lg:pt-52 lg:px-10 w-full flex flex-col justify-between lg:flex-row gap-4 max-w-[1600px] mx-auto'>
                <section className='w-full lg:w-[80%] xl:w-[70%] mx-auto flex flex-col gap-8 lg:gap-8'>
                    <h1 className='text-4xl lg:text-5xl xl:text-7xl text-center font-mulish font-bold dark:text-la-blue'>PARLOR STAGES</h1>
                    <h2 className='mx-6 md:mx-8 lg:mx-12 xl:mx-24 text-xl lg:text-2xl xl:text-4xl font-semibold text-center font-mulish dark:text-ivory'>Bring the Magic of Intimate Performances to Your Space</h2>
                    <p className='mx-6 md:mx-8 lg:mx-12 xl:mx-24 font-mulish text-lg dark:text-ivory '>Experience the charm and elegance of early 20th-century parlor concerts with Parlor Stages. Whether you're hosting a cozy gathering or organizing a unique event, our platform makes it easy to connect with performers and create unforgettable experiences in the comfort of your home or a special venue. Host, attend, and enjoy concerts the way they were meant to be—up close and personal.</p>
                </section>
                <picture className='lg:w-[70%] mx-auto'>
                    <img 
                        src='../src/assets/images/living-room.png' alt='living room with guitar' 
                        className='object-cover max-w-full rounded-xl'
                        />
                </picture>
            </div>
            {/* info cards */}
            <div className='bg-la-light-gray text-black dark:bg-la-gray-med dark:text-white mx-auto max-w-[1600px] w-full mt-20 mb-20'>
                <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center'>
                    <div className='py-6'>
                        <h3 className='text-center text-lg font-semibold mt-2 mb-4'>Discover</h3>
                        <p className='w-[70%] mx-auto text-center mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, minima alias aperiam beatae esse dignissimos.</p>
                    </div>
                    <div className='py-6'>
                        <h3 className='text-center text-lg font-semibold mt-2 mb-4'>Find</h3>
                        <p className='w-[70%] mx-auto text-center mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, minima alias aperiam beatae esse dignissimos.</p>
                    </div>
                    <div className='py-6'>
                        <h3 className='text-center text-lg font-semibold mt-2 mb-4'>Invite</h3>
                        <p className='w-[70%] mx-auto text-center mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, minima alias aperiam beatae esse dignissimos.</p>
                    </div>
                    <div className='py-6'>
                        <h3 className='text-center text-lg font-semibold mt-2 mb-4'>Enjoy</h3>
                        <p className='w-[70%] mx-auto text-center mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, minima alias aperiam beatae esse dignissimos.</p>
                    </div>
                </section>
                <div className=' w-full flex justify-center py-4'>
                    <button onClick={handleGetStartedClick} className='tracking-wide text-xl bg-la-blue text-white font-semibold py-3 px-5 mr-2 border-solid rounded  hover:bg-la-blue-dark hover:text-white transition ease-in-out uppercase'>Get Started</button>
                </div>
            </div>
            {/* review carousel */}
            <div className='bg-la-light-gray dark:bg-la-gray-med mx-auto max-w-[1600px] text-black dark:text-ivory w-full mt-10 mb-10'>
                <div>
                    <h1 className='text-center text-2xl font-semibold my-8 pt-8 tracking-wide'>Recent Feedback</h1>
                    <Carousel />
                </div>
            </div>
            {/* footer */}
            <footer className='bg-white dark:bg-la-gray-dark dark:text-white flex flex-col sm:flex-row justify-between px-10'>
                <div className='my-8'>
                    <h5 className='font-bold text-xl uppercase mb-4'>How it works</h5>
                    <a href='#' className='block text-lg dark:font-semibold dark:text-la-blue'>FAQ for Artists and Presenters</a>
                    <a href='#' className='block text-lg dark:font-semibold dark:text-la-blue'>FAQ for Hosts and Venues</a>
                </div>
                <div className='my-8'>
                    <h5 className='font-semibold mb-4 text-xl uppercase'>Topics</h5>
                    <a href='#' className='block text-lg dark:font-semibold dark:text-la-blue'>House Concert</a>
                    <a href='#' className='block text-lg dark:font-semibold dark:text-la-blue tracking-wide'>Wedding</a>
                    <a href='#' className='block text-lg dark:font-semibold dark:text-la-blue tracking-wide'>Birthday</a>
                </div>
                <div className='my-8'>
                    <h5 className='font-semibold mb-4 text-xl uppercase'>About Us</h5>
                    <a href='#' className='block text-lg dark:font-semibold dark:text-la-blue tracking-wide'>Blog</a>
                    <a href='#' className='block text-lg dark:font-semibold dark:text-la-blue tracking-wide'>Jobs</a>
                    <a href='#' className='block text-lg dark:font-semibold dark:text-la-blue tracking-wide'>Press</a>
                </div>
                <div className='my-8'>
                    <div className='flex flex-row gap-8 mb-4'>
                        <a href='#'>
                            <FaInstagram className='text-[2.3rem] hover:text-la-blue'/>
                        </a>
                        <a href='#'>
                            <FaFacebook className='text-[2.3rem] hover:text-la-blue'/>
                        </a>
                        <a href='#'>
                            <FaYoutube className='text-[2.3rem] hover:text-la-blue'/>
                        </a>
                    </div>
                    <div>
                        <label className='mb-2'>Signup for our Newsletter</label>
                        <input className='block text-black mb-2 p-1 rounded-sm'/>
                        <button type='submit' onClick={handleNewsletterAdd} className='bg-transparent dark:text-white font-bold py-2 px-4 mr-2 border-solid rounded border-black dark:border-ivory border hover:bg-la-blue hover:text-white transition ease-in-out'>Sign Up</button>
                    </div>
                    
                </div>
            </footer>
        </div> 
        </>
    );
}

export default Layout;
