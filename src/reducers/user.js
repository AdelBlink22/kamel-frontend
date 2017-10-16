/**
 * Created by tawashy on 9/30/17.
 */
import {EDIT_PROFILE, CANCEL_EDIT_PROFILE, FETCH_PROFILE, PROFILE_ERROR, UPDATE_PROFILE} from '../actions/types/user'

// initialize state
const INITIAL_STATE = {user: {},  editable:'', error:'', message: ''};

export default function (state = INITIAL_STATE, action) {
    switch (action.type){
        case EDIT_PROFILE:
            return { ...state, editable: true };
        case CANCEL_EDIT_PROFILE:
            return { ...state, editable: false };
        case FETCH_PROFILE:
            return {...state, user: action.payload};
        case PROFILE_ERROR:
            return {...state, error: action.payload.error};
        case UPDATE_PROFILE:
            return {...state, user: action.payload, editable: false };
        default:
            return state;
    }
}
