import types from './types'

const setTokens = (tokens) => ({
    type: types.SET_TOKENS,
    payload: tokens
})


const setCountdownHoliday = (holiday) => ({
    type: types.SET_COUNTDOWN_HOLIDAY,
    payload: holiday
})

export default {
    setTokens,
    setCountdownHoliday,
}