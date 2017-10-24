/**
 * Created by tawashy on 10/22/17.
 */

import { getData, postData, deleteData, putData } from '../index'
import { FETCH_USERS, FETCH_ERROR, CREATE_USER, CREATE_USER_ERROR, SEARCH_VALUE, SEARCH_TYPE, DELETE_USER, DELETE_USER_ERROR,
    FETCH_SINGLE_USER, FETCH_SINGLE_USER_ERROR} from '../types/admin/users'



export function fetchUsers() {
    const url = '/admin/users';
    return dispatch => getData(FETCH_USERS, FETCH_ERROR, true, url, dispatch);
}

export function fetchSingleUser(id) {
    const url = '/admin/users/' + id;
    return dispatch => getData(FETCH_SINGLE_USER, FETCH_SINGLE_USER_ERROR, true, url, dispatch);
}

export function updateUser(id, updated) {
    const data = updated;
    const url = '/admin/users/' + id;
    return dispatch => putData(FETCH_SINGLE_USER, FETCH_SINGLE_USER_ERROR, true, url, dispatch, data);
}

export function createUser(newUser) {
    const data = newUser;
    const url = '/admin/users/add';
    return dispatch => postData(CREATE_USER, CREATE_USER_ERROR, true, url, dispatch, data)
}

export function deleteUser(id) {
    const url = `/admin/users/delete/${id}`;
    return dispatch => deleteData(DELETE_USER, DELETE_USER_ERROR, true, url, dispatch);
}

export function searchEmail(value) {
    return {type: SEARCH_VALUE, value};
}

export function searchType(value) {
    return {type: SEARCH_TYPE, value};
}
