import React, {useState} from 'react';
import {useAuth} from '../context/AuthProvider'
import {useNavigate} from 'react-router-dom'

function Login() {

    const {login} = useAuth()

    let navigate = useNavigate()

    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')


    const handleEmailChange = (e)=>{
        setEmailInput(e.target.value)
    }

    const handlePasswordChange = (e)=>{
        setPasswordInput(e.target.value)
    }


    const handleSubmit = async (e)=>{

        const values = {
            email: emailInput,
            password: passwordInput
        }

        e.preventDefault()
        try {
            const res = await fetch('/api/login',{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            const userData = await res.json()

            if (!res.ok){
                console.log('error', userData.error)
                return
            } else {
                console.log('login success')
                login(userData)
                setEmailInput('')
                setPasswordInput('')
                navigate('/dashboard')
            }
        } catch (error) {
            console.error('error loggin in', error)
        }
        
    }

    return (
        <div className='px-6 bg-ivory dark:bg-gray-800 text-slate-800 mt-[64px] flex h-screen  flex-col'>
            
            <div className='mt-20 sm:mx-auto sm:w-full sm:max-w-sm'>
                <h1 className='text-2xl/9 mt-10 text-center text-ivory'>Sign In to Your Account</h1>
            </div>
            
            <div className='mt-4 text-black dark:text-ivory sm:mx-auto sm:w-full sm:max-w-sm '>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <label htmlFor='email' className='block font-medium'>Email Address</label>
                    <input 
                        type='email' 
                        id='email' 
                        name='email'
                        placeholder=' exampleemail@gmail.com'
                        className='pl-2 border border-transparent focus:outline-none focus:ring-4 focus:ring-gray-400 focus:border-transparent block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-600' 
                        onChange={(e)=>handleEmailChange(e)}
                    />
                    <label htmlFor='password' className='block font-medium'>Password</label>
                    <input 
                        type='password'
                        id='password'
                        name='password'
                        placeholder=' enter your password here'
                        className='pl-2 border border-transparent focus:outline-none focus:ring-4 focus:ring-gray-400 focus:border-transparent block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-600' 
                        onChange={(e)=>handlePasswordChange(e)}
                    />
                    <div>
                        <button type='submit' className='flex mt-8 w-full justify-center py-6 rounded-md text-2xl font-semibold bg-gray-600 dark:text-white hover:bg-gray-700 hover:text-ivory transition ease-in-out duration-300 '>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;