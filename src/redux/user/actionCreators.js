import types from './types'

const pending = () => ({
    type: types.PENDING
})

const success = (data) => ({
    type: types.SUCCESS,
    payload: data
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