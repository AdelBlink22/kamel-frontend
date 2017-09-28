/**
 * Created by tawashy on 9/27/17.
 */
import axios from 'axios'

//

export const API_URL            = 'https://kaspercab-kamel.herokuapp.com/api';
export const CLIENT_ROOT_URL    = 'https://kamel-front-end.herokuapp.com';




// Error handler
export function errorHandler(dispatch, error, type) {
    let errorMessage = error.response ? error.response.data : error;

    // NOT AUTHENTICATED ERROR
    if (error.status === 401) {
        errorMessage = 'You are not authorized to do this.';
        //return dispatch(logoutUser(errorMessage));
    }

    dispatch({
        type,
        payload: errorMessage,
    });
}

// Post Request
export function postData(action, errorType, isAuthReq, url, dispatch, data) {
    const requestUrl = API_URL + url;
    let headers = {};

    // if (isAuthReq) {
    //     headers = { headers: { Authorization: Cookies.load('token') } };
    // }

    axios.post(requestUrl, data, headers)
        .then((response) => {
        console.log(response.data);
            dispatch({
                type: action,
                payload: response.data,
            });
        })
        .catch((error) => {
            errorHandler(dispatch, error.response, errorType);
        });
}

// Get Request
export function getData(action, errorType, isAuthReq, url, dispatch) {
    const requestUrl = API_URL + url;
    let headers = {};

    // if (isAuthReq) {
    //     headers = { headers: { Authorization: Cookies.load('token') } };
    // }

    axios.get(requestUrl, headers)
        .then((response) => {
            dispatch({
                type: action,
                payload: response.data,
            });
        })
        .catch((error) => {

            console.log('ERROR: ',error);
            errorHandler(dispatch, error.response, errorType);
        });
}

// Put Request
export function putData(action, errorType, isAuthReq, url, dispatch, data) {
    const requestUrl = API_URL + url;
    let headers = {};

    // if (isAuthReq) {
    //     headers = { headers: { Authorization: Cookies.load('token') } };
    // }

    console.log("DATA",data);

    axios.put(requestUrl, data, headers)
        .then((response) => {
            dispatch({
                type: action,
                payload: response.data,
            });
        })
        .catch((error) => {
            errorHandler(dispatch, error.response, errorType);
        });
}

// Delete Request
export function deleteData(action, errorType, isAuthReq, url, dispatch) {
    const requestUrl = API_URL + url;
    let headers = {};

    // if (isAuthReq) {
    //     headers = { headers: { Authorization: Cookies.load('token') } };
    // }

    axios.delete(requestUrl, headers)
        .then((response) => {
            dispatch({
                type: action,
                payload: response.data,
            });
        })
        .catch((error) => {
            errorHandler(dispatch, error.response, errorType);
        });
}