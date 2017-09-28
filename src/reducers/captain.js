/**
 * Created by tawashy on 9/27/17.
 */

import { CREATE_CAPTAIN, UPDATE_CAPTAIN, CAPTAIN_ERROR } from '../actions/types/captain'
// initial state
const INITIAL_STATE = { error: '', message: '', registered_: false };

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type){
        case CREATE_CAPTAIN:
            return { ...state, error: '', message: '', registered_: true };
        case CAPTAIN_ERROR:
            return { ...state, error: action.payload.data.error, registered_: false };
        case  UPDATE_CAPTAIN:
            return { ...state, message: action.payload.message };
        default:
            return state;
    }
}