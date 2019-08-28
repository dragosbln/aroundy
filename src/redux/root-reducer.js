import {combineReducers} from 'redux'
import auth from './auth/reducer'
import user from './user/reducer'
import holidays from './holidays/reducer'
import leave from './leave/reducer'
import requests from './request/reducer'
import app from './app/reducer'
import team from './team/reducer'

export default combineReducers({
    auth,
    user,
    holidays,
    leave,
    requests,
    app,
    team
})