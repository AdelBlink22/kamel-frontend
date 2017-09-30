/**
 * Created by tawashy on 9/27/17.
 */
import { combineReducers } from 'redux'
import { reducer as reduxReducer} from 'redux-form'

// reducers files
import authReducer from './auth'
import captainReducer from './captain'
import coursesReducer from './courses'
import applicationReducer from './application'

const rootReducer = combineReducers({
    form: reduxReducer.plugin({}),
    auth: authReducer,
    captain: captainReducer,
    courses: coursesReducer,
    application: applicationReducer
});


export default rootReducer;