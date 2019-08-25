import types from './types'

const pending = () => ({
    type: types.PENDING
})

const loginSuccess = (data) => ({
    type: types.LOGIN_SUCCESS,
    payload: data
})

const getUserSuccess = (data) => ({
    type: types.GET_USER_SUCCESS,
    payload: data
})

const error = (err) => ({
    type: types.ERROR,
    payload: err
})

export default {
    pending,
    loginSuccess,
    getUserSuccess,
    error
}