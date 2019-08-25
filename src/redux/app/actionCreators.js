import types from './types'

const setAccessToken = (token) => ({
    type: types.SET_ACCESS_TOKEN,
    payload: token
})

const setRefreshToken = (token) => ({
    type: types.SET_REFRESH_TOKEN,
    payload: token
})

const setCountdownHoliday = (holiday) => ({
    type: types.SET_COUNTDOWN_HOLIDAY,
    payload: holiday
})

export default {
    setAccessToken,
    setCountdownHoliday,
    setRefreshToken
}