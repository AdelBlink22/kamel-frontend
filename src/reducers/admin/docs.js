/**
 * Created by tawashy on 11/4/17.
 */

import {FETCH_DOCS, FETCH_DOCS_ERROR, POST_DOCS, POST_DOCS_ERROR, INCREMENT_PAGE, DECREMENT_PAGE} from '../../actions/types/admin/docs';


// initialize state
const INITIAL_STATE = { doc: [], page: 1,  message:'', error:''};

export default function (state = INITIAL_STATE, action) {
    console.log("ACTION:::",action);
    switch (action.type) {
        case FETCH_DOCS:
            return {...state, doc: action.payload.doc, error: '', message:'', page: 6 };
        case FETCH_DOCS_ERROR:
            return {...state, error: action.payload, page: 1};
        case POST_DOCS:
            return { ...state, message: action.payload.message, page: 6};
        case POST_DOCS_ERROR:
            return { ...state, error: action.payload.data.error, page: state.page };
        case INCREMENT_PAGE:
            return {...state, page: state.page +1};
        case DECREMENT_PAGE:
            return {...state, page: state.page -1};
        default:
            return state;
    }

}
