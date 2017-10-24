/**
 * Created by tawashy on 10/23/17.
 */

import { getData, postData, deleteData } from '../index'
import { FETCH_VIDEOS, FETCH_VIDEOS_ERROR, FETCH_VIDEO_ADMIN, FETCH_VIDEO_ADMIN_ERROR,
         CREATE_VIDEOS, CREATE_VIDEOS_ERROR, DELETE_VIDEO, DELETE_VIDEO_ERROR, UPDATE_VIDEO, UPDATE_VIDEO_ERROR } from '../types/admin/videos';
export function fetchVideos() {
    const url = '/admin/videos';
    return dispatch => getData(FETCH_VIDEOS, FETCH_VIDEOS_ERROR, true, url, dispatch);
}


export function fetchVideosList(id){
    const url = '/videos/'+ id;
    return dispatch => getData(FETCH_VIDEOS, FETCH_VIDEOS_ERROR, true, url, dispatch);
}

export function fetchVideo(id) {
    const url = '/video/' + id;
    return dispatch => getData(FETCH_VIDEO_ADMIN, FETCH_VIDEO_ADMIN_ERROR, true, url, dispatch);
}

export function createVideo(data) {
    const url = '/admin/videos/new';
    return dispatch => postData(CREATE_VIDEOS, CREATE_VIDEOS_ERROR, true, url, dispatch, data);
}

export function deleteVideo(id) {
    const url = '/admin/videos/'+ id;
    return dispatch => deleteData(DELETE_VIDEO, DELETE_VIDEO_ERROR, true, url, dispatch);
}

export function updateVideo(id, data) {
    const url = '/admin/videos/update/' + id;
    return dispatch => postData(UPDATE_VIDEO, UPDATE_VIDEO_ERROR, true, url, dispatch, data);

}



// export function fetchUsersProcess(userId) {
//     const url = '/progress/' + userId;
//     return dispatch => getData(FETCH_VIDEOS, FETCH_VIDEOS_ERROR, true, url, dispatch);
// }
//
//
// export function fetchProgress(userId) {
//     const url = '/progress/'+ userId;
//     return dispatch => getData(FETCH_USER_PROGRESS, FETCH_USER_PROGRESS_ERROR, true, url, dispatch);
// }
//
// export function postVideoCompleted(userId, videoId) {
//     const url = '/progress/update';
//     const data = { video: videoId, user: userId, completed: true }
//     return dispatch => postData(POST_USER_PROGRESS, POST_USER_PROGRESS_ERROR, true, url, dispatch, data);
// }
