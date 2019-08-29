import types from './types'

const loginPending = () => ({
    type: types.LOGIN_PENDING
})

const setTokens = (data) => ({
    type: types.SET_TOKENS,
    payload: data
})

const loginError = (err) => ({
    type: types.LOGIN_ERROR,
    payload: err
})

const passwordPending = () => ({
    type: types.PASSWORD_PENDING
})

const passwordError = (err) => ({
    type: types.PASSWORD_ERROR,
    payload: err
})

const passwordSuccess = () => ({
    type: types.PASSWORD_SUCCESS,
})

const setPasswordToken = (token) => ({
    type: types.SET_PASSWORD_TOKEN,
    payload: token
})



export default {
    loginError,
    setTokens,
    loginPending,
    setPasswordToken,
    passwordError,
    passwordPending,
    passwordSuccess
}