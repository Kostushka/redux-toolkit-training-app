// const GET_USERS = 'GET_USERS';
const ADD_USERS = 'ADD_USERS';
const REMOVE_USERS = 'REMOVE_USERS';

const initialState = {
    users: ['John', 'Steve'],
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        // case GET_USERS:
        //     return { ...state, users: [...state.users, ...action.payload] };
        case ADD_USERS:
            return { ...state, users: [...state.users, action.payload] };
        case REMOVE_USERS:
            return {
                ...state,
                users: [...state.users.slice(0, state.users.length - 1)],
            };

        default:
            return state;
    }
};

// export const getUsersAction = (payload) => ({
//     type: GET_USERS,
//     payload,
// });
export const addUsersAction = (payload) => ({
    type: ADD_USERS,
    payload,
});
export const removeUsersAction = () => ({
    type: REMOVE_USERS,
});
