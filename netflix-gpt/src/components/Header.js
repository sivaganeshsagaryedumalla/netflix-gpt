import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    const handleLogout = () => {
        signOut(auth).then(() => {
            dispatch(removeUser())
            navigate('/')
        }).catch((error) => {
            // An error happened.
        });
    }
    useEffect(() => {
        if (user == null) {
            navigate("/")
            return;
        }
    }, [])


    return (
        <>
            <div className='flex justify-between'>

                <div className='w-full bg-gradient-to-b from-black h-20 absolute'>
                    <img className='absolute w-44 bg-gradient-to-b from-black z-30' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'></img>

                </div>
                {user && ( // Render the logout button only if user is logged in
                    <div className='absolute z-10 top-4 right-0 text-white'>
                        <button className='uppercase border-red-300 p-2 border-2 rounded-md text-sm' onClick={() => handleLogout()}>Logout from Netflix</button>
                    </div>
                )}
            </div>

        </>
    )
}

export default Header;       