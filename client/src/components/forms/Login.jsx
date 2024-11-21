import React, {useState} from 'react';

function Login() {

    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')


    const handleEmailChange = (e)=>{
        setEmailInput(e.target.value)
    }

    const handlePasswordChange = (e)=>{
        setPasswordInput(e.target.value)
    }


    const handleSubmit = (e)=>{
        e.preventDefault()
        // send the post to /api/login
        // update global user state
        // handle navigation to dashboard
    }

    return (
        <div>
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