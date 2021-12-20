import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { counterToolkitReducer } from './counterToolkitReducer/counterToolkitReducer';
import counterToolkitSlice from './counterToolkitReducer/counterToolkitSlice';
// import { usersToolkitReducer } from './usersToolkitReducer/usersToolkitReducer';
import usersToolkitSlice from './usersToolkitReducer/usersToolkitSlice';

const rootReducer = combineReducers({
    // toolkitCounter: counterToolkitReducer,
    // toolkitUsers: usersToolkitReducer,
    sliceCounter: counterToolkitSlice,
    sliceUsers: usersToolkitSlice,
});

export const store = configureStore({ reducer: rootReducer });
