import * as actionTypes from '../actions/actionTypes';

const initialState = {
    id: null,
    name: null,
    email: null,
    token: null,
    role: null,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USERDATA:
            const { id, name, email, token, role } = action.payload;
            return {
                ...state,
                id: id,
                name: name,
                email: email,
                token: token,
                role: role
            }

        case actionTypes.SET_USER_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}

export default reducer;