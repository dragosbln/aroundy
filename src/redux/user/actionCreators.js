import types from './types'

const pending = () => ({
    type: types.PENDING
})

const success = (data) => ({
    type: types.SUCCESS,
    payload: data
})

const error = (err) => ({
    type: types.ERROR,
    payload: err
})

export default {
    pending,
    success,
    error
}