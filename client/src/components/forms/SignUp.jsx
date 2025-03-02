import React, {useState} from 'react';
import {useAuth} from '../context/AuthProvider'
import {useNavigate} from 'react-router-dom'

function SignUp() {

    const {login} = useAuth()

    let navigate = useNavigate()

    const handleSubmit = ()=>{
        console.log('yo')
    }

    const handleLoginClick = ()=>{

        navigate('/login')
        console.log('login')
    }
    

    return (
        <div className='px-6 bg-ivory dark:bg-gray-800 text-slate-800 mt-[64px] flex h-screen  flex-col'>
            
            <div className='mt-20 sm:mx-auto sm:w-full sm:max-w-sm'>
                <h1 className='text-2xl/9 mt-10 text-center text-ivory'>Create A New Account</h1>
            </div>
            
            <div className='mt-4 text-black dark:text-ivory sm:mx-auto sm:w-full sm:max-w-sm '>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <label htmlFor='email' className='block font-medium'>Email Address</label>
                    <input 
                        type='email' 
                        id='email' 
                        name='email'
                        placeholder='example@gmail.com'
                        className='pl-2 placeholder:italic border border-transparent focus:outline-none focus:ring-4 focus:ring-blue-600  focus:border-transparent block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-600' 
                        onChange={(e)=>handleEmailChange(e)}
                    />
                    <label htmlFor='password' className='block font-medium'>Password</label>
                    <input 
                        type='password'
                        id='password'
                        name='password'
                        placeholder='enter your password here'
                        className='pl-2 placeholder:italic border border-transparent focus:outline-none focus:ring-4 focus:ring-blue-600  focus:border-transparent block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-600' 
                        onChange={(e)=>handlePasswordChange(e)}
                    />
                    <div>
                        <button type='submit' className='flex mt-8 w-full justify-center py-6 rounded-md text-2xl font-semibold bg-gray-600 dark:text-white hover:bg-gray-700 hover:text-ivory transition ease-in-out duration-300 '>Login</button>
                    </div>
                </form>
                <div className='mt-4 flex flex-col justify-center'>
                    <h2 className='text-center'>Don't have an account?</h2>
                    <button onClick={handleLoginClick} className='font-semibold text-lg'>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;