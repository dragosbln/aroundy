import types from './types'

const initialState = {
    user: null,
    error: null,
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
                error: action.payload,
                apiState: updateApiState('error', true)
            }
        case types.SUCCESS:
            return{
                ...state,
                user: action.payload,
                apiState: updateApiState('success', true)
            }
        default: 
            return state
    }
}

export default reducer