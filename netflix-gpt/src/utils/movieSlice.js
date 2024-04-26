import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        nowPlayingMovies: null,
        movieTrailer: null
    },
    reducers: {
        addMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailer: (state, action) => {
            state.movieTrailer = action.payload;
        }
    }
})
export default movieSlice.reducer;
export const { addMovies, addTrailer } = movieSlice.actions;