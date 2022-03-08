import axios from "axios";

import * as types from './actionTypes';

export const setError = (error) => {
    return {
        type: types.SET_ERROR,
        payload: error
    }
}

export const startLoading = (value) => {
    return {
        type: types.START_LOADING,
        payload: value
    }
}

const fetchData = (data) => {
    return {
        type: types.LOAD_DATA,
        payload: data
    }
}

const setTotalResult = (count) => {
    return {
        type: types.TOTAL_RESULT,
        payload: count
    }
}

export const fetchDataAsync = (query, page, filter) => {
    return dispatch => {
        dispatch(startLoading(true))
        axios.get(`/api/jobs/search?page=${page}${filter}&q=${query}`)
            .then(res => {
                dispatch(fetchData(res.data.data));
                dispatch(setTotalResult(res.data.searchCount));
                dispatch(startLoading(false));
                //console.log(res.data);

            })
            .catch(err => {
                dispatch(setError(err.response.data))
                dispatch(startLoading(false))
            });
    }
}

export const fetchSearchAsync = (query) => {
    return async dispatch => {
        dispatch(startLoading(true))
        try {
            const response = await axios.get(`/api/jobs/search?q=${query}`);
            dispatch(fetchData(response.data.data))
            dispatch(startLoading(false))
        }
        catch (err) {
            dispatch(startLoading(false))
            dispatch(setError(err.response.data))
        }

    }
}

const setCompanyInfo = (data) => {
    return {
        type: types.LOAD_COMPANY_DATA,
        payload: data
    }
}
export const fetchCompanyDataAsync = (id) => {
    return dispatch => {
        dispatch(startLoading(true))
        axios.get(`api/jobs/get-jobs/${id}`)
            .then(res => {
                dispatch(setCompanyInfo(res.data.data))
                dispatch(startLoading(false))
            })
            .catch(err => {
                dispatch(setError(err.response.data))
                dispatch(startLoading(false))

            });
    }
}

const setSelectedCompanyInfo = (data) => {
    return {
        type: types.SET_SELECTED_COMPANY,
        payload: data
    }
}
export const fetchSelectCompanyAsync = (id) => {
    return dispatch => {
        dispatch(startLoading(true))
        axios.get(`api/jobs/get-jobs/${id}`)
            .then(res => {
                dispatch(setSelectedCompanyInfo(res.data.data))
                dispatch(startLoading(false))
            })
            .catch(err => {
                dispatch(setError(err.response.data))
                dispatch(startLoading(false))

            });
    }
}

const setUserJob = (data) => {
    return {
        type: types.USER_APPLY_JOB,
        payload: data
    }
}

export const fetchUserJobsAsync = (id) => {
    return dispatch => {
        dispatch(startLoading(true))
        axios.get(`api/jobs/fetchUserJob?id=${id}`)
            .then(res => {

                dispatch(setUserJob(res.data.data))
                dispatch(startLoading(false))
            })
            .catch(err => {
                dispatch(setError(err.response.data))
                dispatch(startLoading(false))

            });
    }
}

const setPlaces = (place) => {
    return {
        type: types.SET_PLACES,
        payload: place
    }
}

export const fetchPlaces = (query) => {
    return async dispatch => {
        try {
            const response = await axios.get(`api/jobs/place?q=${query}`);
            const country = [];
            response.data.data.forEach((data) => {
                country.push(data)
            });
            dispatch(setPlaces(country));
        }

        catch (err) {
            dispatch(setError(err.message))
        }
    }
}

export const setCompanyUser = (user) => {
    return {
        type: types.APPLIED_USER,
        payload: user
    }
}

export const fetchCompanyUser = (id) => {
    return async dispatch => {
        try {
            const response = await axios.get(`/api/jobs/fetchUser?id=${id}`);
            dispatch(setCompanyUser(response.data.data));
        }
        catch (err) {
            dispatch(setError(err.response.data))
            //console.log(err.response.data);
        }

    }
}

export const resetState = () => {
    return {
        type: types.RESET_STATE,
    }
}