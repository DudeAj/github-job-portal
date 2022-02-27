import { SET_USERDATA, SET_USER_ERROR } from './actionTypes';
import axios from 'axios';
import history from '../../config/history';


const setUserData = (userinfo) => {
    localStorage.setItem("jobToken", userinfo.token);
    history.push('/')
    return {
        type: SET_USERDATA,
        payload: {
            id: userinfo.id,
            name: userinfo.name,
            email: userinfo.email,
            token: userinfo.token,
            role: userinfo.role,
        }
    }
}

const logout = () => {
    localStorage.removeItem("jobToken");
    return {
        type: SET_USERDATA,
        payload: {
            id: null,
            name: null,
            email: null,
            token: null,
            role: null,
        }
    }
}

const setError = (error) => {
    return {
        type: SET_USER_ERROR,
        payload: error
    }
}

export const registerUser = (name, email, password, role) => {
    return async dispatch => {
        try {
            const response = await axios.post("/api/user/register",
                {
                    name: name,
                    email: email,
                    password: password,
                    role: role
                }
            );

            dispatch(setUserData(response.data.data));
            history.push('/')
        } catch (error) {
            dispatch(setError(error.response.data));
        }
    }
}

export const loginUser = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post("/api/user/login",
                {
                    email: email,
                    password: password
                });



            dispatch(setUserData(response.data.data));

        }
        catch (error) {
            console.log(error)
            dispatch(setError(error.response.data));
        }
    }
}

export const loadUserInfo = (token) => {

    return async dispatch => {
        try {
            const response = await axios.post("/api/user/get-user");
            dispatch(setUserData({ ...response.data.data, token }));
            history.push('/');
        }
        catch (error) {
            console.log(error.message);
            dispatch(setError(error.message));

        }
    }
}

export const logoutUser = () => {
    return async dispatch => {
        dispatch(logout())
    }
}

export const authCheckStateSaga = () => {
    return async dispatch => {
        const token = localStorage.getItem('jobToken');
        if (!token) {
            dispatch(logoutUser());
        } else {
            return;
        }
    }
}

