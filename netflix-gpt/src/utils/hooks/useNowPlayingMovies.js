import { options } from '../constant'
import { useDispatch } from 'react-redux'
import { addMovies } from '../movieSlice'
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getPlayingNowMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const json = data.json();
        json.then(data => {
            dispatch(addMovies(data.results))
        });
    }
    useEffect(() => {
        getPlayingNowMovies();
    }, [])
}

export default useNowPlayingMovies