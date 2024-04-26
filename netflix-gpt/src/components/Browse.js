import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../utils/hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

    useNowPlayingMovies();
    return (
        <div className='w-full'>
            <Header></Header>
            <MainContainer></MainContainer>
            <SecondaryContainer></SecondaryContainer>
        </div>
    )
}

export default Browse