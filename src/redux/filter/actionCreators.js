import types from './types'

const setFilters = (data) => ({
    type: types.SET_FILTERS,
    payload: data
})

export default {
    setFilters
}