/**
 * Created by tawashy on 10/30/17.
 */

import { getData, postData, deleteData, putData } from '../index'
import {FETCH_REQUESTS, FETCH_REQUESTS_ERROR, FETCH_REQUEST, FETCH_REQUEST_ERROR, APPROVE_REQUEST, APPROVE_REQUEST_ERROR} from '../types/admin/requests'




export function fetchRequests() {
    const url = '/admin/requests';
    return dispatch => getData(FETCH_REQUESTS, FETCH_REQUESTS_ERROR, true, url, dispatch);
}

export function fetchRequest(requestId) {
    const url = '/admin/requests/'+requestId;
    return dispatch => getData(FETCH_REQUEST, FETCH_REQUEST_ERROR, true, url, dispatch);
}

export function approveRequest(requestId, data) {
    const url = '/admin/requests/'+requestId;
    return dispatch => putData(APPROVE_REQUEST, APPROVE_REQUEST_ERROR, true, url, dispatch, {status: 'Approved'});
}