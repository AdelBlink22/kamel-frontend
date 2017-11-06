/**
 * Created by tawashy on 11/4/17.
 */
import { getData, postData, deleteData, putData } from '../index'

import {FETCH_DOCS, FETCH_DOCS_ERROR, POST_DOCS, POST_DOCS_ERROR, INCREMENT_PAGE, DECREMENT_PAGE } from '../types/admin/docs'

export function fetchDoc(userId) {
    const url = '/admin/docs/'+ userId;
    return dispatch => getData(FETCH_DOCS, FETCH_DOCS_ERROR, true, url, dispatch);
}

export function postDoc(data, userId) {
    const url = '/admin/docs/new/' + userId;
    return dispatch => postData(POST_DOCS, POST_DOCS_ERROR, true, url,dispatch, data);
}

export function incrementPage(){
    console.log("INCREMENT:");

    return {
        type: INCREMENT_PAGE,
        payload: ''
    };
}

export function decrementPage(){

    return {
        type: DECREMENT_PAGE,
        payload: ''
    };

}