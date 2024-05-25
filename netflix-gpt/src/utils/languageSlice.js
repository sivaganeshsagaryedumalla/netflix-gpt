import { createSlice } from '@reduxjs/toolkit';
const languageSlice = createSlice({
    name: 'language',
    initialState: {
        lang: 'English'
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload;
        }
    }
})

export default languageSlice.reducer;
export const { changeLanguage } = languageSlice.actions;    
