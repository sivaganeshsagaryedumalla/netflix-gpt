import { options } from '../constant'
import { useDispatch } from 'react-redux'
import { addMovies, addUpcomingMovies } from '../movieSlice'
import { useEffect } from 'react';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getPlayingNowMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
        const json = data.json();
        json.then(data => {
            dispatch(addUpcomingMovies(data.results))
        });
    }
    useEffect(() => {
        getPlayingNowMovies();
    }, [])
}

export default useUpcomingMovies