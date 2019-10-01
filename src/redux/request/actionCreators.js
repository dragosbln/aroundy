import types from './types'

const allRequestsPending = () => ({
    type: types.ALL_PENDING
})

const allRequestsSuccess = (requests) => ({
    type: types.ALL_SUCCESS,
    payload: requests
})

const allRequestsError = (err) => ({
    type: types.ALL_ERROR,
    payload: err
})

const createPending = () => ({
    type: types.CREATE_PENDING
})

const createSuccess = () => ({
    type: types.CREATE_SUCCESS,
})

const createError = (err) => ({
    type: types.CREATE_ERROR,
    payload: err
})

const approvalPending = () => ({
    type: types.APPROVAL_PENDING
})

const approvalSuccess = () => ({
    type: types.APPROVAL_SUCCESS,
})

const approvalError = (err) => ({
    type: types.APPROVAL_ERROR,
    payload: err
})

export default {
    createError,
    createPending,
    createSuccess,
    allRequestsError,
    allRequestsPending,
    allRequestsSuccess,
    approvalError,
    approvalPending,
    approvalSuccess
}