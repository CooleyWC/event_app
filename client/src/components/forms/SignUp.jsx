import React, {useState} from 'react';
import {useAuth} from '../context/AuthProvider'
import {useNavigate} from 'react-router-dom'

import { useFormik } from 'formik';
import * as yup from 'yup';

function SignUp() {

    const {login} = useAuth()

    let navigate = useNavigate()

    const submitUser = async (values) =>{

        console.log('submittedValues', values)
      
        try {
            const res = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-type': ' application/json'
                },
                body: JSON.stringify(values)
            })

            const userData = await res.json()
            if(!res.ok){
                console.log('error - signup failed', userData.error)
                alert(userData.error)
                return
            }
            console.log('signup success', userData)
            login(userData)
            navigate('/dashboard')
        } catch (error){
            console.error('error', error.message)
            return error
        }
    }

    const signupSchema = yup.object({
        firstName: yup
            .string('Enter your first name')
            .min(2, 'Must be at least 2 characters')
            .max(15, 'Must be no bigger than 15 characters')
            .required('First Name is required'),
        lastName: yup
            .string('Enter your last name')
            .min(2, 'Must be at least 2 characters')
            .max(15, 'Must be no bigger than 15 characters')
            .required('Last Name is required'),
        location: yup
            .string('Enter your location (city and state)')
            .min(3, 'Must be at least 3 characters')
            .max(20, 'Must be no bigger than 15 characters')
            .required('Location is required'),
        email: yup
            .string('Enter Your Email')
            .email('Enter a valid Email')
            .required('Email is Required'),
        password: yup
            .string('Enter your password')
            .min(8, 'Must be at least 2 characters')
            .max(20, 'Must be no bigger than 20 characters')
            .required('Password is required'),
    })

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            location: '',
            password: '',
            
        },
        validationSchema: signupSchema,
        onSubmit: submitUser
    })



    const handleLoginClick = ()=>{

        navigate('/login')
        console.log('login')
    }
    

    return (
        <div className='px-6 bg-la-light-gray-extra-light dark:bg-la-gray-med text-la-gray-med mt-[64px] flex h-screen  flex-col'>
            
            <div className='mt-20 sm:mx-auto sm:w-full sm:max-w-sm'>
                <h1 className='text-2xl/9 font-semibold mt-10 text-center text-la-gray-med dark:text-ivory'>Create A New Account</h1>
            </div>
            
            <div className='mt-4 text-black dark:text-ivory sm:mx-auto sm:w-full sm:max-w-sm '>
                <form onSubmit={formik.handleSubmit} className='space-y-4'>
                    <label htmlFor='firstName' className='block font-medium'>First Name</label>
                    <input 
                        type='text' 
                        id='firstName' 
                        name='firstName'
                        placeholder='Kevin'
                        className='pl-2 placeholder:italic border border-transparent focus:outline-none focus:ring-4 focus:ring-blue-600  focus:border-transparent block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-600' 
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div className='text-red-600'>{formik.errors.firstName}</div>
                    ) : null}

                    <label htmlFor='firstName' className='block font-medium'>Last Name</label>
                    <input 
                        type='text' 
                        id='lastName' 
                        name='lastName'
                        placeholder='McAllister'
                        className='pl-2 placeholder:italic border border-transparent focus:outline-none focus:ring-4 focus:ring-blue-600  focus:border-transparent block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-600' 
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div className='text-red-600'>{formik.errors.lastName}</div>
                    ) : null}

                    <label htmlFor='location' className='block font-medium'>Location</label>
                    <input 
                        type='text' 
                        id='location' 
                        name='location'
                        placeholder='Chicago, IL'
                        className='pl-2 placeholder:italic border border-transparent focus:outline-none focus:ring-4 focus:ring-blue-600  focus:border-transparent block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-600' 
                        value={formik.values.location}
                        onChange={formik.handleChange}
                     
                    />
                    {formik.touched.location && formik.errors.location ? (
                        <div className='text-red-600'>{formik.errors.location}</div>
                    ) : null}
            
                    <label htmlFor='email' className='block font-medium'>Email Address</label>
                    <input 
                        type='text' 
                        id='email' 
                        name='email'
                        placeholder='example@gmail.com'
                        className='pl-2 placeholder:italic border border-transparent focus:outline-none focus:ring-4 focus:ring-blue-600  focus:border-transparent block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-600' 
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className='text-red-600'>{formik.errors.email}</div>
                    ) : null}

                    <label htmlFor='password' className='block font-medium'>Password</label>
                    <input 
                        type='password'
                        id='password'
                        name='password'
                        placeholder='enter your password here'
                        className='pl-2 placeholder:italic border border-transparent focus:outline-none focus:ring-4 focus:ring-blue-600  focus:border-transparent block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-600' 
                        value={formik.values.password}
                        onChange={formik.handleChange}
                      
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div className='text-red-600'>{formik.errors.password}</div>
                    ) : null}
                    <div>
                        <button type='submit' className='flex mt-8 w-full justify-center py-6 rounded-md text-2xl font-semibold bg-la-blue text-white hover:bg-la-blue-dark hover:text-ivory transition ease-in-out duration-300 '>Create Account</button>
                    </div>
                </form>
                <div className='mt-4 flex flex-col justify-center'>
                    <h2 className='text-center'>Don't have an account?</h2>
                    <button onClick={handleLoginClick} className='font-semibold text-xl text-la-blue hover:text-la-blue-dark'>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;