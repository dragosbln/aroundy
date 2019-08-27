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

const createPending = () => ({
    type: types.CREATE_PENDING
})

const createError = (err) => ({
    type: types.CREATE_ERROR,
    payload: err
})

const createSuccess = () => ({
    type: types.CREATE_SUCCESS,
})

const deletePending = () => ({
    type: types.DELETE_PENDING
})

const deleteError = (err) => ({
    type: types.DELETE_ERROR,
    payload: err
})

const deleteSuccess = () => ({
    type: types.DELETE_SUCCESS,
})

export default {
    currentUserError,
    currentUserPending,
    currentUserSuccess,
    allUsersError,
    allUsersPending,
    allUsersSuccess,
    createError,
    createPending,
    createSuccess,
    deleteError,
    deletePending,
    deleteSuccess
}