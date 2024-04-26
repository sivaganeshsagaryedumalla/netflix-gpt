import { useState, useRef, useEffect } from 'react'
import React from 'react'
import Header from './Header'
import { validate } from '../utils/validation';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase.js"
import { Dispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice.js';

const Login = () => {
    const email = useRef(null);
    const passwd = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const user = useSelector(store => store.user)
    // dispatch(removeUser())

    const [isSignInForm, setSignInForm] = useState(true)
    const [errorMessage, updateErrorMessage] = useState(null)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                navigate("/browse")
            } else {
                // User is signed out
                dispatch(removeUser())
                navigate("/")
            }
        });
        //whenever the component unmounts we are unsubsribing to the onauthstatechange call back
        return () => unsubscribe();
    }, [])
    const toggleSignup = () => {
        setSignInForm(!isSignInForm);
    }
    const onClickSignup = () => {
        updateErrorMessage(validate(email.current.value, passwd.current.value));
        if (!errorMessage) {
            if (isSignInForm) {
                signInWithEmailAndPassword(auth, email.current.value, passwd.current.value)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        updateErrorMessage(errorCode + '-' + errorMessage)
                    });
            }
            if (!isSignInForm) {
                createUserWithEmailAndPassword(auth, email.current.value, passwd.current.value)
                    .then((userCredential) => {
                        // Signed up 
                        const user = userCredential.user;
                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        updateErrorMessage(errorCode + '-' + errorMessage);
                        // ..
                    });
            }
        }
    }
    return (
        <>
            <Header></Header>
            <img className='absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"></img>
            <form onSubmit={(e) => e.preventDefault()} className='bg-black absolute flex flex-col w-3/12 mx-auto top-1/3 left-0 right-0 rounded-lg p-3'>
                <h3 className='text-white text-start p-5 text-xl'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h3>
                {!isSignInForm ? <input className='p-2 m-3 outline-none bg-slate-800 text-white' type='text' placeholder='User Name'></input> : ''}
                <input ref={email} className='p-2 m-3 outline-none bg-slate-800 text-white' type='text' placeholder='Email or Phone Number'></input>
                <input ref={passwd} className='p-2 m-3 outline-none bg-slate-800 text-white' type='password' placeholder='Password'></input>
                <p className='text-red-500 ml-3'>{errorMessage}</p>
                <button className='bg-red-600 text-white p-2 rounded-sm mt-2' onClick={() => onClickSignup()}>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                <p className='text-white p-2'> <a className='cursor-pointer' onClick={() => toggleSignup()}>{isSignInForm ? ' New to Netflix? Sign Up' : 'Already Registered? Sign In'}</a> </p>

            </form >
        </>
    )
}

export default Login