/**
 * Created by tawashy on 9/30/17.
 */

import { FETCH_APPLICATION, FETCH_APPLICATION_PROGRESS, FETCH_APPLICATION_ERROR, CREATE_APPLICATION, CREATE_APPLICATION_ERROR,
         UPLOADING_APPLICATION} from '../actions/types/application';

const INITIAL_STATE = { application: null, progress: 0, error: '', message: '', isUploading: false };

export default (state = INITIAL_STATE, action) => {

    console.log("Action in reducer: ",action.type);

    switch (action.type){
        case FETCH_APPLICATION:
            return { ...state, application: action.payload, isUploading: false };
        case UPLOADING_APPLICATION:
            return { ...state, isUploading: true};
        case FETCH_APPLICATION_PROGRESS:
            return { ...state, progress: action.payload.progress };
        case FETCH_APPLICATION_ERROR:
            return { ...state, error: action.payload.error };
        case CREATE_APPLICATION:
            console.log("Create Action Type was triggered with action Payload: ", action.payload);
            return { ...state, application: action.payload};
        case CREATE_APPLICATION_ERROR:
            return { ...state, error: action.payload.error};

        default:
            return state;
    }

}