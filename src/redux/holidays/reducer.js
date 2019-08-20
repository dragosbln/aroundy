import types from './types'

const initialState = {
    data: null,
    countdownHoliday: null,
    apiState: {
        pending: false,
        success: false,
        error: false
    }
}

const updateApiState = (key='', value=null) => ({
    ...initialState.apiState,
    key: value
})

const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.PENDING:
            return{
                ...state,
                apiState: updateApiState('pending', true)
            }
        case types.ERROR:
            return{
                ...state,
                apiState: updateApiState('error', action.payload)
            }
        case types.SUCCESS:
            return{
                ...state,
                data: action.payload,
                apiState: updateApiState('success', true)
            }
        case types.SET_COUNTDOWN_HOLIDAY:
            return{
                ...state,
                countdownHoliday: action.payload
            }
        default: 
            return state
    }
}

export default reducer