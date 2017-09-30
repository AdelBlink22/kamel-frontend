/**
 * Created by tawashy on 9/30/17.
 */

import { FETCH_COURSES, FETCH_COMPLETED_COURSES, FETCH_COURSES_ERROR } from '../actions/types/courses'

// initial state
const INITIAL_STATE = { videos: {}, progress:'', message: '', error: ''};


export default (state = INITIAL_STATE, action) => {
    console.log("ACTION: ",action.payload);
    console.log(action);
    switch (action.type){
        case FETCH_COMPLETED_COURSES:
            return { ...state, progress: action.payload };
        case FETCH_COURSES_ERROR:
            return { ...state, error: action.payload.error };
        default:
            return state;
    }
}