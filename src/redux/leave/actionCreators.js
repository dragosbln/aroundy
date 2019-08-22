import types from './types'

const setFrom = (date) => ({
    type: types.SET_FROM,
    payload: date
})

const setTo = (date) => ({
    type: types.SET_TO,
    payload: date
})

const clear = () => ({
    type: types.CLEAR
})

export default {
    setFrom,
    setTo,
    clear
}