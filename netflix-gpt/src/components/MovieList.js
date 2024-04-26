import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    console.log(title, movies);
    return (
        <div>
            <div>
                <h1 className='font-bold text-2xl ml-5'>
                    {title}
                </h1>
                <div className='flex m-3 overflow-x-scroll'>
                    {movies && movies.map(movie => <MovieCard path={movie?.poster_path}></MovieCard>)}
                </div>
            </div>





        </div>
    )
}

export default MovieList