import { createSlice } from '@reduxjs/toolkit';

const usersToolkitSlice = createSlice({
    name: 'usersToolkit',
    initialState: {
        users: ['John', 'Steve'],
    },
    reducers: {
        addUser(state, action) {
            state.users.push(action.payload);
        },
        removeUser(state) {
            state.users.pop();
        },
    },
});

export default usersToolkitSlice.reducer;

export const { addUser, removeUser } = usersToolkitSlice.actions;
