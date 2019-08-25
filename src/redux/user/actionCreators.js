import types from './types'

const pending = () => ({
    type: types.PENDING
})

const setTokens = (data) => ({
    type: types.SET_TOKENS,
    payload: data
})

const getUserSuccess = (data) => ({
    type: types.GET_USER_SUCCESS,
    payload: data
})

const getAllUsersSuccess = (data) => ({
    type: types.GET_ALL_USERS_SUCCESS,
    payload: data
})

const error = (err) => ({
    type: types.ERROR,
    payload: err
})

export default {
    pending,
    setTokens,
    getUserSuccess,
    getAllUsersSuccess,
    error
}