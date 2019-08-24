import types from './types'

const pending = () => ({
    type: types.PENDING
})

const success = (requests) => ({
    type: types.SUCCESS,
    payload: requests
})

const error = (err) => ({
    type: types.SUCCESS,
    payload: err
})

export default {
    pending,
    success,
    error
}