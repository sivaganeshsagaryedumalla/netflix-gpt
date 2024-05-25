import { createSlice } from '@reduxjs/toolkit';
const dummy = createSlice({
    name: 'dummy',
    initialState: {
        myDummyValue: null,
    },
    reducers: {
        addDummy: (state, action) => {
            state.myDummyValue = action.payload;
        }
    }
})
export const { addDummy } = dummy.actions
export default dummy.reducer;