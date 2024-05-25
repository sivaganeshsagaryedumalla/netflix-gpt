import { createSlice } from "@reduxjs/toolkit"
const gptStoreSlice = createSlice({
    name: 'gptStore',
    initialState: {
        toggleGptStoreView: false,
    },
    reducers: {
        toggleGPTsearch: (state, action) => {
            state.toggleGptStoreView = !state.toggleGptStoreView;

        }
    }
},

)

export const { toggleGPTsearch } = gptStoreSlice.actions;
export default gptStoreSlice.reducer;