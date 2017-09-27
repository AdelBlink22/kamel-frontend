/**
 * Created by tawashy on 9/27/17.
 */
import { combineReducers } from 'redux'

// reducers files
import authReducer from './auth'

const rootReducer = combineReducers({
    auth: authReducer
});


export default rootReducer;