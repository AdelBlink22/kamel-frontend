/**
 * Created by tawashy on 9/27/17.
 */

// import auth action types
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FORGOT_PASSWORD_REQUEST, RESET_PASSWORD_REQUEST} from '../actions/types/auth'

// initial state
const INITIAL_STATE = { error: '', message: '', authenticated: false };

// export auth reducer
export default (state= INITIAL_STATE, action) => {
    switch(action.type) {
        case AUTH_USER:
            return { ...state, error: '', message: '', authenticated: true };
        case UNAUTH_USER:
            return { ...state, error: action.payload.error, authenticated: false };
        case AUTH_ERROR:
            return { ...state, error: action.payload.error };
        case FORGOT_PASSWORD_REQUEST:
            return { ...state, message: action.payload.message };
        case RESET_PASSWORD_REQUEST:
            return { ...state, message: action.payload.message };
        default:
            return state;
    }
}