import types from './types'

const pending = () => ({
    type: types.PENDING
})

const setTokens = (data) => ({
    type: types.SET_TOKENS,
    payload: data
})

const error = (err) => ({
    type: types.ERROR,
    payload: err
})

export default {
    pending,
    setTokens,
    error
}