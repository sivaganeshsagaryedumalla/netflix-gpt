import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        movieTrailer: null
    },
    reducers: {
        addMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upComingMovies = action.payload;
        },
        addTrailer: (state, action) => {
            state.movieTrailer = action.payload;
        }
    }
})
export default movieSlice.reducer;
export const { addMovies, addTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = movieSlice.actions;