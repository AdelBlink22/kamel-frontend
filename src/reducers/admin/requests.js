/**
 * Created by tawashy on 10/30/17.
 */

import {FETCH_REQUESTS, FETCH_REQUESTS_ERROR, FETCH_REQUEST, FETCH_REQUEST_ERROR, APPROVE_REQUEST, APPROVE_REQUEST_ERROR} from '../../actions/types/admin/requests'


// initialize state
const INITIAL_STATE = { requests: {}, request: {},  message:'', error:''};

export default function (state = INITIAL_STATE, action) {
    switch (action.type){
        case FETCH_REQUESTS:
            return { ...state, requests: action.payload };
        case FETCH_REQUESTS_ERROR:
            return { ...state, error: action.payload };
        case FETCH_REQUEST:
            return { ...state, request: action.payload };
        case FETCH_REQUEST_ERROR:
            return {...state, error: action.payload.error};
        case APPROVE_REQUEST:
            return { ...state, request: action.payload.request, message: action.payload.message};
        case APPROVE_REQUEST_ERROR:
            return { ...state, error: action.payload.error};
        // case CREATE_REQUEST:
        //     return { ...state, message:  action.payload };
        // case CREATE_REQUEST_ERROR:
        //     return { ...state, error: action.payload.error };
        // case CHANGE_REQUEST_STATUS:
        //     return { ...state, message: action.payload };
        // case CHANGE_REQUEST_STATUS_ERROR:
        //     return { ...state, error: action.payload.error };
        // case UPLOAD_FILE:
        //     return { ...state, message: action.payload};
        // case UPLOAD_FILE_ERROR:
        //     return { ...state, error: action.payload.error};
        default:
            return state;
    }
};
