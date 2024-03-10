import React from 'react'
import { useSelector } from 'react-redux'
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();
    // const user = useSelector(store => store.user);
    // console.log(user);
    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }


    return (
        <>
            <div className='flex justify-between' onClick={window.alert('clicked')}>

                <div className='w-full bg-gradient-to-b from-black h-20'>
                    <img className='absolute w-44 bg-gradient-to-b from-black z-30' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'></img>

                </div>
                <div className='' >
                    <button onClick={() => handleLogout()}>Logout from netflix</button>
                </div>
            </div>

        </>
    )
}

export default Header;       