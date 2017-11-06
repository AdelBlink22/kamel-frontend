/**
 * Created by tawashy on 10/24/17.
 */

import { getData, postData, deleteData, putData } from '../index'
import { FETCH_BADGES, FETCH_BADGES_ERROR, CREATE_BADGE, CREATE_BADGE_ERROR, SEARCH_BADGES,
    DELETE_BADGE, DELETE_BADGE_ERROR, UPDATE_BADGE, UPDATE_BADGE_ERROR,
    FETCH_BADGE, FETCH_BADGE_ERROR} from '../types/admin/badges';


export function fetchBadges() {
    const url = '/admin/badges';
    return dispatch => getData(FETCH_BADGES, FETCH_BADGES_ERROR, true, url, dispatch);
}

export function fetchSingleBadges(id) {
    const data = id;
    const url = `${'/admin/badges/'+ data}`;
    return dispatch => getData(FETCH_BADGE, FETCH_BADGE_ERROR, true, url, dispatch);
}

export function createBadge(newBadge) {
    const data = newBadge;
    const url = '/admin/badges/add';
    return dispatch => postData(CREATE_BADGE, CREATE_BADGE_ERROR, true, url, dispatch, data);
}

export function deleteBadge(id) {
    const url = `/admin/badges/delete/${id}`;
    return dispatch => deleteData(DELETE_BADGE, DELETE_BADGE_ERROR, true, url, dispatch);
}

export function updateBadge(id, update) {
    const data = update;
    const url = "/admin/badges/" + id;
    return dispatch => putData(UPDATE_BADGE, UPDATE_BADGE_ERROR, true, url, dispatch, data);
}

export function searchBadges(value) {
    return {type: SEARCH_BADGES, value};
}
