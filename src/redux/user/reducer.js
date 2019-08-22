import types from './types'
import mock from '../../utils/mockData'

const initialState = {
    data: mock.loggedUser,
    apiState: {
        pending: false,
        success: false,
        error: null
    }
}

const updateApiState = (key='', value=null) => ({
    ...initialState.apiState,
    [key]: value
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
        default: 
            return state
    }
}

export default reducer