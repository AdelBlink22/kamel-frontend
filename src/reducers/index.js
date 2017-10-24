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
import userReducer from './user'

// admin reducers
import adminUsersReducers from './admin/users'
import adminVideoReducers from './admin/videos'
import adminBadgesReducers from './admin/badges'

const rootReducer = combineReducers({
    form: reduxReducer.plugin({}),
    auth: authReducer,
    user: userReducer,
    captain: captainReducer,
    courses: coursesReducer,
    application: applicationReducer,

    // admin reducers
    adminUsers: adminUsersReducers,
    adminVideos: adminVideoReducers,
    adminBadges: adminBadgesReducers
});


export default rootReducer;