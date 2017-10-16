/**
 * Created by tawashy on 9/30/17.
 */

import { getData, postData, uploadData } from './index'

import { FETCH_APPLICATION_PROGRESS, FETCH_APPLICATION, FETCH_APPLICATION_ERROR, CREATE_APPLICATION, CREATE_APPLICATION_ERROR }from './types/application'

export function fetchApplicationProgress(userId) {
    const url = '/progress/application/user/'+ userId;
    return dispatch => getData(FETCH_APPLICATION_PROGRESS, FETCH_APPLICATION_ERROR, true, url, dispatch);
}

export function uploadApplication(userId, data) {
    const url = '/application/user/'+ userId;
    return dispatch => uploadData(CREATE_APPLICATION, CREATE_APPLICATION_ERROR, true, url, dispatch, data);

}

export function fetchApplication(userId) {
    const url = '/application/user/' + userId;
    return dispatch => getData(FETCH_APPLICATION, FETCH_APPLICATION_ERROR, true, url, dispatch);
}

export function uploadDoc(id, data, doc) {
    const url = '/application/user/'+id;

    console.log(id, data, doc);
}