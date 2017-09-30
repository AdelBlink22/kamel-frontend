/**
 * Created by tawashy on 9/30/17.
 */

import { getData } from './index'

import { FETCH_APPLICATION_PROGRESS, FETCH_APPLICATION_ERROR }from './types/application'

export function fetchApplicationProgress(userId) {
    const url = '/progress/application/user/'+ userId;
    return dispatch => getData(FETCH_APPLICATION_PROGRESS, FETCH_APPLICATION_ERROR, true, url, dispatch);
}

