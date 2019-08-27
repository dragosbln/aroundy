import types from './types'

const currentUserPending = () => ({
    type: types.CURRENT_USER_PENDING
})


const currentUserSuccess = (data) => ({
    type: types.CURRENT_USER_SUCCESS,
    payload: data
})

const currentUserError = (err) => ({
    type: types.CURRENT_USER_ERROR,
    payload: err
})

const allUsersPending = () => ({
    type: types.ALL_USERS_PENDING
})

const allUsersError = (err) => ({
    type: types.ALL_USERS_ERROR,
    payload: err
})

const allUsersSuccess = (data) => ({
    type: types.ALL_USERS_SUCCESS,
    payload: data
})

export default {
    currentUserError,
    currentUserPending,
    currentUserSuccess,
    allUsersError,
    allUsersPending,
    allUsersSuccess
}