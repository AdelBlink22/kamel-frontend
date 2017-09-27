/**
 * Created by tawashy on 9/27/17.
 */

import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'

// combined reducers
import reducers from './reducers/index'

// create store with middleware
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

// add combined reduces to the store
const store = createStoreWithMiddleware(reducers);

export default store;