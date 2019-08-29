import types from './types'

const managersPending = () => ({
    type: types.MANAGERS_PENDING
})

const managersSuccess = (data) => ({
    type: types.MANAGERS_SUCCESS,
    payload: data
})

const managersError = (err) => ({
    type: types.MANAGERS_ERROR,
    payload: err
})

const usersPending = () => ({
    type: types.USERS_PENDING
})

const usersSuccess = (data) => ({
    type: types.USERS_SUCCESS,
    payload: data
})

const usersError = (err) => ({
    type: types.USERS_ERROR,
    payload: err
})

export default {
    managersError,
    managersPending,
    managersSuccess,
    usersError,
    usersPending,
    usersSuccess
}