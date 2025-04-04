import React, {useState} from 'react';
import {useAuth} from '../context/AuthProvider'
import {useNavigate} from 'react-router-dom'
import {useFormik} from 'formik';
import * as yup from 'yup';

function Login() {

    const {login} = useAuth()

    let navigate = useNavigate()

    const [errorMessage, setErrorMessage] = useState('')

    const loginSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be a minimum of 8 characters')
            .required('Password is required')
    })

    const submitUser = async (values) => {

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
                setErrorMessage(userData.error)
                return
            } else {
                login(userData)
                setErrorMessage('')
                navigate('/dashboard')
            }
        } catch (error) {
            console.error('error loggin in')
            alert(error.message)
        }
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: submitUser,
    })


    const handleSignUpClick = ()=>{
        navigate('/signup')
    }

    return (
        <div className='px-6 bg-la-light-gray-extra-light dark:bg-la-gray-med text-la-gray-med mt-[64px] flex h-screen flex-col'>
            
            <div className='mt-20 sm:mx-auto sm:w-full sm:max-w-sm'>
                <h1 className='text-2xl/9 mt-10 mb-4 text-center dark:text-ivory font-semibold'>Sign In to Your Account</h1>
            </div>

            {errorMessage && (
                <p className='text-center text-red-500 font-bold text-2xl'>{errorMessage}</p>
            )}
            
            <div className='mt-4 text-black dark:text-ivory sm:mx-auto sm:w-full sm:max-w-sm '>
                <form onSubmit={formik.handleSubmit} className='space-y-4'>
                    <label htmlFor='email' className='block font-medium'>Email Address</label>
                    <input 
                        type='email' 
                        id='email' 
                        name='email'
                        placeholder='example@gmail.com'
                        className='pl-2 placeholder:italic border border-transparent focus:outline-none focus:ring-4 focus:ring-la-blue focus:ring-offset-2  focus:border-transparent block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-600' 
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
                        className='pl-2 placeholder:italic border border-transparent focus:outline-none focus:ring-4 focus:ring-la-blue focus:ring-offset-2  focus:border-transparent block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-600' 
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div className='text-red-600'>{formik.errors.password}</div>
                    ) : null}
                    <div>
                        <button type='submit' className='flex mt-8 w-full justify-center py-6 rounded-md text-2xl font-semibold bg-la-blue text-white hover:bg-la-blue-dark transition ease-in-out duration-300 tracking-wide'>Login</button>
                    </div>
                </form>
                <div className='mt-4 flex flex-col justify-center'>
                    <h2 className='text-center'>Don't have an account?</h2>
                    <button onClick={handleSignUpClick} className='font-semibold text-xl text-la-blue hover:text-la-blue-dark'>
                        Create New Account
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;