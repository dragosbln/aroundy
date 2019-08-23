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

const setType = (id, type='') => ({
    type: types.SET_TYPE,
    payload: {
        id,
        type
    }
})

export default {
    setFrom,
    setTo,
    clear,
    setType
}