import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../utils/hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useUpcomingMovies from '../utils/hooks/useUpcomingMovies';
import usePopularMovies from '../utils/hooks/usePopularMovies';
import useTopRatedMovies from '../utils/hooks/useTopRated';


const Browse = () => {

    useNowPlayingMovies();
    useUpcomingMovies();
    usePopularMovies();
    useTopRatedMovies();
    return (
        <div className='w-full'>
            <Header></Header>
            <MainContainer></MainContainer>
            <SecondaryContainer></SecondaryContainer>
        </div>
    )
}

export default Browse