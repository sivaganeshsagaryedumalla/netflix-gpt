import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { toggleGPTsearch } from '../utils/gptStoreSlice'
import { changeLanguage } from '../utils/languageSlice';


const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    const store1 = useSelector(store => store.gpt)
    const languageRef = useRef()
    const handleShowGPT = () => {
        dispatch(toggleGPTsearch())
    }
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
    const handleLanguageClick = (e) => {
        dispatch(changeLanguage(languageRef.current.value))
    }


    return (
        <>
            <div className='flex justify-between'>

                <div className='w-full bg-gradient-to-b from-black h-20 absolute'>
                    <img className='absolute w-44 bg-gradient-to-b from-black z-30' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'></img>

                </div>
                {user && ( // Render the logout button only if user is logged in
                    <div className='absolute z-10 top-4 right-0 text-white mt-4'>
                        <select className='bg-gray-500 rounded-sm cursor-pointer' ref={languageRef} onClick={handleLanguageClick}>
                            <option selected value="en">English</option>
                            <option value="hi">Hindi</option>
                            <option value="ta">Tamil</option>
                            <option value="te">Telugu</option>
                            <option value="mr">Marathi</option>
                            <option value="gu">Gujarati</option>
                            <option value="kn">Kannada</option>
                            <option value="ml">Malayalam</option>
                            <option value="pa">Punjabi</option>
                            <option value="ta">Tamil</option>
                        </select>
                        <button onClick={handleShowGPT}>{store1.toggleGptStoreView ? 'Show Normal Search' : 'Show Gpt Search'}</button>
                        <button className='uppercase border-red-300 p-2 border-2 rounded-md text-sm' onClick={() => handleLogout()}>Logout from Netflix</button>
                    </div>
                )}
            </div>

        </>
    )
}

export default Header;       