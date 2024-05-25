import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice';
import movieSlice from './movieSlice';
import gptStoreSlice from './gptStoreSlice';
import languageSlice from './languageSlice';

const appStore = configureStore({

    reducer: {
        user: userSlice,
        movies: movieSlice,
        gpt: gptStoreSlice,
        language: languageSlice
    }
})

export default appStore;