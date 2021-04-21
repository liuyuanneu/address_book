const initialState = {};

function contactReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_PENDING':
            return { ...state, loading: true };
        case 'FETCH_FULLFILED':
            return {...state};
        case 'FETCH_USER_REJECTED':
            return {...state};
        default:
            return state;
    }
};

export default contactReducer;