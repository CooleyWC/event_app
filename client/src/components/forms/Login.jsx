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
        <div className='mt-[64px] h-screen'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input 
                    type='email' 
                    id='email' 
                    name='email' 
                    onChange={(e)=>handleEmailChange(e)}
                />
                <label htmlFor='password'>Password</label>
                <input 
                    type='password'
                    id='password'
                    name='password'
                    onChange={(e)=>handlePasswordChange(e)}
                />
                <button type='submit'>Login</button>
            </form>
            
        </div>
    );
}

export default Login;