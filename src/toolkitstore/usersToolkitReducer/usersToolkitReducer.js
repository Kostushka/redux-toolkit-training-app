import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
    users: ['John', 'Steve'],
};

export const addUser = createAction('ADD_USER');
export const removeUser = createAction('REMOVE_USER');

export const usersToolkitReducer = createReducer(initialState, {
    [addUser]: (state, action) => {
        state.users.push(action.payload);
    },
    [removeUser]: (state) => {
        state.users = state.users.slice(0, state.users.length - 1);
    },
});
