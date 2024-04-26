import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies)
    if (!movies) return

    const mainMovie = movies[1];
    return (
        <div>
            <VideoTitle movie={mainMovie}>

            </VideoTitle>
            <VideoBackground movieId={mainMovie.id}></VideoBackground>
        </div>
    )
}

export default MainContainer