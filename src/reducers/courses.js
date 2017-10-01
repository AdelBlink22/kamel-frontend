/**
 * Created by tawashy on 9/30/17.
 */

import { FETCH_COURSES, FETCH_COMPLETED_COURSES, FETCH_COURSES_ERROR, FETCH_VIDEO, FETCH_VIDEO_ERROR, POST_USER_PROGRESS, POST_USER_PROGRESS_ERROR } from '../actions/types/courses'

// initial state
const INITIAL_STATE = { videos: {}, progress: '', video: {}, message: '', error: ''};


export default (state = INITIAL_STATE, action) => {
    console.log("ACTION: ",action.payload);
    console.log(action);
    switch (action.type){
        case FETCH_COURSES:
            return {...state, videos: action.payload.videos, error:'', message:'', progress: ''};
        case FETCH_COMPLETED_COURSES:
            return { ...state, progress: action.payload };
        case FETCH_COURSES_ERROR:
            return { ...state, error: action.payload };
        case FETCH_VIDEO:
            return { ...state, videos: [], error:'', message: '', video: action.payload };
        case FETCH_VIDEO_ERROR:
            return { ...state, error:action.payload.error };
        case POST_USER_PROGRESS:
            return { ...state, message: action.payload };
        case POST_USER_PROGRESS_ERROR:
            return{ ...state, error: action.payload.error};
        default:
            return state;
    }
}