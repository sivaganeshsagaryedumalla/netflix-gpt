import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../utils/hooks/useMovieTrailer';

function VideoBackground(props) {
    useMovieTrailer(props)
    const store = useSelector((store) => store.movies)
    const id = props.movieId;

    return (

        <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/" + store.movieTrailer?.key + '?&autoplay=1&mute=1&loop=1&controls=0&modestbranding'} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>)
}

export default VideoBackground