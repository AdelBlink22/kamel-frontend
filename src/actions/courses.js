/**
 * Created by tawashy on 9/30/17.
 */

import { getData, postData } from './index'

import { FETCH_COURSES, FETCH_COMPLETED_COURSES, FETCH_COURSES_ERROR, FETCH_VIDEO, FETCH_VIDEO_ERROR, POST_USER_PROGRESS, POST_USER_PROGRESS_ERROR }from './types/courses'

export function fetchCoursesCompleted(userId) {
    console.log('COURSES ACTION TRIGGERED!!!');
    console.log('USER ID: '+ userId);
    const url = '/courses/completed/user/'+ userId;
    return dispatch => getData(FETCH_COMPLETED_COURSES, FETCH_COURSES_ERROR, true, url, dispatch);
}

export function fetchCourses() {
    const url = '/courses';
    return dispatch => getData(FETCH_COURSES, FETCH_COURSES_ERROR, true, url, dispatch);
}

export function fetchVideo(id) {
    const url = '/video/' + id;
    return dispatch => getData(FETCH_VIDEO, FETCH_VIDEO_ERROR, true, url, dispatch);
}

export function postVideoCompleted(userId, videoId) {
    const url = '/progress/update';
    const data = { video: videoId, user: userId, completed: true }
    return dispatch => postData(POST_USER_PROGRESS, POST_USER_PROGRESS_ERROR, true, url, dispatch, data);
}
