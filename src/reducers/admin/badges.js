/**
 * Created by tawashy on 10/24/17.
 */

import { FETCH_BADGES, FETCH_BADGES_ERROR, CREATE_BADGE, CREATE_BADGE_ERROR, SEARCH_BADGES, DELETE_BADGE,
    DELETE_BADGE_ERROR, UPDATE_BADGE, UPDATE_BADGE_ERROR, FETCH_BADGE, FETCH_BADGE_ERROR} from '../../actions/types/admin/badges'

// initialize state
const INITIAL_STATE = {badges: [], badge: {}, search:'', message:'', error:''};

export default function (state = INITIAL_STATE, action) {
    switch (action.type){
        case FETCH_BADGES:
            return { ...state, badges: action.payload };
        case FETCH_BADGES_ERROR:
            return { ...state, error: action.payload.data.error };
        case FETCH_BADGE:
            return { ...state, badge: action.payload };
        case FETCH_BADGE_ERROR:
            return { ...state, error: action.payload.data.error };
        case CREATE_BADGE:
            return { ...state, badges: state.badges.concat(action.payload.badge), message: action.payload.message };
        case CREATE_BADGE_ERROR:
            return { ...state, error: action.payload.data.error };
        case DELETE_BADGE:
            return { ...state, badges: action.payload.data, message:action.payload.message };
        case DELETE_BADGE_ERROR:
            return { ...state, error: action.payload.data.error};
        case UPDATE_BADGE:
            return { ...state, message: action.payload.message };
        case UPDATE_BADGE_ERROR:
            return { ...state, error: action.payload.data.error};
        case SEARCH_BADGES:
            const { value } = action;
            return {...state, search: value};
        default:
            return state;
    }
};
