import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const store = useSelector((store) => store.movies)
    return (
        <div className=' ml-4'>
            <div className='-mt-40 z-10 relative ml-4'>
                <MovieList title='Now Playing' movies={store.nowPlayingMovies}></MovieList>
            </div>
            <MovieList title='Popular' movies={store.popularMovies}></MovieList>
            <MovieList title='Top Rated' movies={store.topRatedMovies}></MovieList>
            <MovieList title='UpComing Movies' movies={store.upComingMovies}></MovieList>
        </div>
    )
}

export default SecondaryContainer