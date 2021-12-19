import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
};

export const addCount = createAction('ADD_COUNT');
export const removeCount = createAction('REMOVE_COUNT');

export const counterToolkitReducer = createReducer(initialState, {
    [addCount]: (state) => {
        state.count = state.count + 1;
    },
    [removeCount]: (state) => {
        state.count = state.count - 1;
    },
});
