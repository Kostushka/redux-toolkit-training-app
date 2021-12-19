import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterToolkitReducer } from './counterToolkitReducer/counterToolkitReducer';
import { usersToolkitReducer } from './usersToolkitReducer/usersToolkitReducer';

const rootReducer = combineReducers({
    toolkitCounter: counterToolkitReducer,
    toolkitUsers: usersToolkitReducer,
});

export const store = configureStore({ reducer: rootReducer });
