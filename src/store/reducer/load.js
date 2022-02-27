import * as types from '../actions/actionTypes';

const initalState = {
    data: [],
    UserApplyJob: [],
    AllCompanyUser: [],
    companyInfo: {},
    applyInfo: {},
    loading: false,
    error: null,
    places: []
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case types.START_LOADING:
            return {
                ...state,
                loading: action.payload
            }

        case types.LOAD_DATA:
            return {
                ...state,
                data: action.payload,
                error: null
            }

        case types.SET_SELECTED_COMPANY:
            return {
                ...state,
                applyInfo: action.payload,
                error: null
            }

        case types.LOAD_COMPANY_DATA:
            return {
                ...state,
                companyInfo: action.payload,
                error: null
            }
        case types.USER_APPLY_JOB:
            return {
                ...state,
                UserApplyJob: action.payload
            }

        case types.APPLIED_USER:
            return {
                ...state,
                AllCompanyUser: action.payload
            }

        case types.SET_ERROR:
            return {
                ...state,
                error: action.payload
            }

        case types.SET_PLACES:

            return {
                ...state,
                places: action.payload
            }
        case types.RESET_STATE:
            return initalState;

        default:
            return state;
    }
}

export default reducer;