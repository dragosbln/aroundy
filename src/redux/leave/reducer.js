import types from './types'
import mock from '../../utils/mockData'

const initialState = {
    periods: [],
    selectStopPeriod: false
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.SET_FROM:
            return{
                ...state,
                periods: [
                    ...state.periods,
                    {
                        id: state.periods.length,
                        from: action.payload
                    }
                ],
                selectStopPeriod: true
            }
        case types.SET_TO:
            const lastPeriod = {
                ...state.periods[state.periods.length - 1],
                to: action.payload
            }
            const newState = {
                ...state,
                selectStopPeriod: false
            }
            newState.periods = [...newState.periods]
            newState.periods[newState.periods.length - 1] = lastPeriod
            return newState
        case types.CLEAR: 
            return {
                ...state,
                periods: []
            }
        default: 
            return state
    }
}

export default reducer