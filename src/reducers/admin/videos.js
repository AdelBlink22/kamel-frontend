/**
 * Created by tawashy on 10/23/17.
 */
import { FETCH_VIDEOS, FETCH_VIDEOS_ERROR, FETCH_VIDEO_ADMIN, FETCH_VIDEO_ADMIN_ERROR,
         CREATE_VIDEOS, CREATE_VIDEOS_ERROR, DELETE_VIDEO, DELETE_VIDEO_ERROR,
         UPDATE_VIDEO, UPDATE_VIDEO_ERROR} from '../../actions/types/admin/videos'

// initialize state
const INITIAL_STATE = {videos: [], video: {},  message:'', error:''};

export default function (state = INITIAL_STATE, action) {
    switch (action.type){
        case FETCH_VIDEOS:
            console.log( 'VIDEO ACTION:', action.payload);
            return { ...state, videos: action.payload.videos, error:'', message:''};
        case FETCH_VIDEOS_ERROR:
            return { ...state, error: action.payload };
        case FETCH_VIDEO_ADMIN:
            return { ...state, video: action.payload , error:'', message:''};
        case FETCH_VIDEO_ADMIN_ERROR:
            return { ...state, error: action.payload.data.error};
        case CREATE_VIDEOS:
            return { ...state, message:  action.payload.message };
        case CREATE_VIDEOS_ERROR:
            return { ...state, error: action.payload.data.error };
        case DELETE_VIDEO:
            return { ...state, videos: action.payload.videos, message: action.payload.message};
        case DELETE_VIDEO_ERROR:
            return { ...state, error: action.payload.data.error };
        case UPDATE_VIDEO:
            return { ...state, message: action.payload.message };
        case UPDATE_VIDEO_ERROR:
            return { ...state, error: action.payload.data.error };
        default:
            return state;
    }
};