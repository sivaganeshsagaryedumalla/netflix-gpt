import { options } from '../constant'
import { useDispatch } from 'react-redux'
import { addMovies, addPopularMovies } from '../movieSlice'
import { useEffect } from 'react';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPlayingNowMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
        const json = data.json();
        json.then(data => {
            dispatch(addPopularMovies(data.results))
        });
    }
    useEffect(() => {
        getPlayingNowMovies();
    }, [])
}

export default usePopularMovies