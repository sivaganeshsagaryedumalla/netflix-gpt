import { options } from '../constant'
import { useDispatch } from 'react-redux'
import { addMovies, addTopRatedMovies } from '../movieSlice'
import { useEffect } from 'react';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getPlayingNowMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
        const json = data.json();
        json.then(data => {
            dispatch(addTopRatedMovies(data.results))
        });
    }
    useEffect(() => {
        getPlayingNowMovies();
    }, [])
}

export default useTopRatedMovies