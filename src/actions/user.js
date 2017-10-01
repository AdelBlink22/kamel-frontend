/**
 * Created by tawashy on 9/30/17.
 */

import {postData, getData} from './index'
import {EDIT_PROFILE, CANCEL_EDIT_PROFILE, FETCH_PROFILE, PROFILE_ERROR, UPDATE_PROFILE } from './types/user'

export function editProfileView(id) {
    return function (dispatch) {
        if (id === 'edit') {
            dispatch({type: EDIT_PROFILE});
        }

        if (id === 'cancel'){
            dispatch({type: CANCEL_EDIT_PROFILE});
        }

    }
}


export function fetchProfile(id) {
    const url = '/admin/users/'+ id;
    return dispatch => getData(FETCH_PROFILE, PROFILE_ERROR, true, url, dispatch);
}

export function updateProfile(id, {email, phone, password}) {
    const url = `/user/${id}`;
    console.log('UPDATE PROFILE: ', {email, phone, password});
    return dispatch => postData(UPDATE_PROFILE, PROFILE_ERROR, true, url, dispatch, {email, phone, password});
}
