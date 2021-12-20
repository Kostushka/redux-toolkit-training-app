import { createSlice } from '@reduxjs/toolkit';

const counterToolkitSlice = createSlice({
    name: 'counterToolkit',
    initialState: {
        count: 0,
    },
    reducers: {
        addCount(state) {
            state.count = state.count + 1;
        },
        removeCount(state) {
            state.count = state.count - 1;
        },
    },
});
export default counterToolkitSlice.reducer;
export const { addCount, removeCount } = counterToolkitSlice.actions;
