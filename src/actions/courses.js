/**
 * Created by tawashy on 9/30/17.
 */

import { getData } from './index'

import { FETCH_COMPLETED_COURSES, FETCH_COURSES_ERROR }from './types/courses'

export function fetchCoursesCompleted(userId) {
    console.log('COURSES ACTION TRIGGERED!!!');
    console.log('USER ID: '+ userId);
    const url = '/courses/completed/user/'+ userId;
    return dispatch => getData(FETCH_COMPLETED_COURSES, FETCH_COURSES_ERROR, true, url, dispatch);
}
