/**
 * Created by tawashy on 9/27/17.
 */

// React cookie
import { Cookies } from 'react-cookie'

// axios to handle requests
import axios from 'axios'

// utils
import { API_URL, CLIENT_ROOT_URL, errorHandler } from './index'

// Auth action type
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FORGOT_PASSWORD_REQUEST, RESET_PASSWORD_REQUEST} from './types/auth'



const cookie = new Cookies();
//= ===============================
// Authentication actions
//= ===============================

// logs in user with email and password and returns
// user object and a token then redirect to dashboard.
export function loginUser({ email, password }) {
    return function (dispatch) {
        axios.post(`${API_URL}/auth/login`, { email, password })
            .then((response) => {
                cookie.set('token', response.data.token);
                cookie.set('user', response.data.user, { path: '/' });
                dispatch({ type: AUTH_USER });
                window.location.href = `${CLIENT_ROOT_URL}/dashboard`;
            })
            .catch((error) => {
                errorHandler(dispatch, error, AUTH_ERROR);
            });
    };
}

// register user then redirect to dashboard
export function registerUser({ email, phone, password }) {
    return function (dispatch) {
        axios.post(`${API_URL}/auth/register`, {email, phone, password})
            .then((response) => {
                cookie.set('token', response.data.token, { path: '/' });
                cookie.set('user', response.data.user, { path: '/' });
                dispatch({type: AUTH_USER});
                window.location.href = `${CLIENT_ROOT_URL}/dashboard`;
            })
            .catch((error) => {
                errorHandler(dispatch, error, AUTH_ERROR);
            });
    };
}

// logs out user, it removes the token and user object from cookie
// then redirect to login page
export function logoutUser(error) {
    return function (dispatch) {
        dispatch({ type: UNAUTH_USER, payload: error || '' });
        cookie.remove('token', { path: '/' });
        cookie.remove('user', { path: '/' });

        window.location.href = `${CLIENT_ROOT_URL}/login`;
    };
}

