/**
 * Created by tawashy on 9/30/17.
 */

import { FETCH_APPLICATION, FETCH_APPLICATION_PROGRESS, FETCH_APPLICATION_ERROR} from '../actions/types/application';

const INITIAL_STATE = { application: {}, progress: 0, error: '', message: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.types){
        case FETCH_APPLICATION:
            return { ...state, application: action.payload };
        case FETCH_APPLICATION_PROGRESS:
            return { ...state, progress: action.payload.progress };
        case FETCH_APPLICATION_ERROR:
            return { ...state, error: action.payload.error };
        default:
            return state;
    }

}