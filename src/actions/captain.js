/**
 * Created by tawashy on 9/27/17.
 */

import { CREATE_CAPTAIN, UPDATE_CAPTAIN, CAPTAIN_ERROR} from '../actions/types/captain'
import { postData } from '../actions/index'

export function createCaptain(captin) {
    const url = '/register';
    const data = captin;
    return dispatch => postData(CREATE_CAPTAIN, CAPTAIN_ERROR, true, url, dispatch, data)
}