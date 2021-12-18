import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { counterReducer } from './counterReducer/counterReducer';
import { usersReducer } from './usersReducer/usersReducer';

const rootReducer = combineReducers({
    count: counterReducer,
    users: usersReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
