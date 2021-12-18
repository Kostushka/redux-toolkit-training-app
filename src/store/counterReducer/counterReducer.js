const ADD_COUNT = 'ADD_COUNT';
const REMOVE_COUNT = 'REMOVE_COUNT';

const initialState = {
    count: 0,
};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COUNT:
            return { ...state, count: state.count + 1 };
        case REMOVE_COUNT:
            return { ...state, count: state.count - 1 };

        default:
            return state;
    }
};

export const addCountAction = { type: ADD_COUNT };
export const removeCountAction = { type: REMOVE_COUNT };
