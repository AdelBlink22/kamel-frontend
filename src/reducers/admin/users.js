/**
 * Created by tawashy on 10/22/17.
 */

// import actions
import { FETCH_USERS, FETCH_ERROR, CREATE_USER, CREATE_USER_ERROR, DELETE_USER, DELETE_USER_ERROR,
    FETCH_SINGLE_USER, FETCH_SINGLE_USER_ERROR} from '../../actions/types/admin/users'

// initialize state
const INITIAL_STATE = {users: {}, user: {}, permit: {}, message:'', error:''};

export default function (state = INITIAL_STATE, action) {
    console.log(action.payload);
    switch (action.type){
        case FETCH_USERS:
            return { ...state, users: action.payload, message: '', error: ''};
        case FETCH_ERROR:
            return { ...state, error: action.payload.data.error };
        case CREATE_USER:
            return { ...state, message: action.payload.message, error: ''};
        case CREATE_USER_ERROR:
            return { ...state, error: action.payload.data.error };
        case DELETE_USER:
            return { ...state, users: action.payload.users, message: action.payload.message };
        case DELETE_USER_ERROR:
            return { ...state, error: action.payload.data.error };
        case FETCH_SINGLE_USER:
            return { ...state, user: action.payload, message: '', error: '' };
        case FETCH_SINGLE_USER_ERROR:
            return { ...state, error: action.payload.data.error };
        default:
            return state;
    }
};