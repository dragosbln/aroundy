import {combineReducers} from 'redux'
import user from './user/reducer'
import holidays from './holidays/reducer'
import leave from './leave/reducer'

export default combineReducers({
    user,
    holidays,
    leave
})