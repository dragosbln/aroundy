import {combineReducers} from 'redux'
import user from './user/reducer'
import holidays from './holidays/reducer'

export default combineReducers({
    user,
    holidays
})