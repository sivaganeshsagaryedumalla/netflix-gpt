import { useState } from 'react'
import React from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true)
    const toggleSignup = () => {
        setSignInForm(!isSignInForm);
    }
    return (
        <>
            <Header></Header>
            <img className='absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"></img>
            <form className='bg-black absolute flex flex-col w-3/12 mx-auto top-1/3 left-0 right-0 rounded-lg p-3'>
                <h3 className='text-white text-start p-5 text-xl'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h3>
                {!isSignInForm ? <input className='p-2 m-3 outline-none bg-slate-800 text-white' type='text' placeholder='User Name'></input> : ''}
                <input className='p-2 m-3 outline-none bg-slate-800 text-white' type='text' placeholder='Email or Phone Number'></input>
                <input className='p-2 m-3 outline-none bg-slate-800 text-white' type='password' placeholder='Password'></input>
                <button className='bg-red-600 text-white p-2 rounded-sm mt-2'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                <p className='text-white p-2'> <a className='cursor-pointer' onClick={() => toggleSignup()}>{isSignInForm ? ' New to Netflix? Sign Up' : 'Already Registered? Sign In'}</a> </p>

            </form >
        </>
    )
}

export default Login