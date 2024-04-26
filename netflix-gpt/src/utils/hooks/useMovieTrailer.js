import { options } from "../constant";
import { useEffect } from "react";
import { addTrailer } from '../movieSlice';
import { useDispatch } from "react-redux";

const useMovieTrailer = (props) => {
    const dispatch = useDispatch();
    const id = props.movieId;
    const getMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US', options);
        const jsonResult = await data.json();
        const trailerId = jsonResult.results.filter((video) => video.type == 'Trailer');
        const videoTrailer = trailerId.length ? trailerId[0] : jsonResult.results[0];
        dispatch(addTrailer(videoTrailer));

    }
    useEffect(() => {
        getMovies();
    }, [])
}
export default useMovieTrailer;