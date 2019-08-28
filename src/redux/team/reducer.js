import types from './types'
import utils from '../../utils/functions'

const initialState = {
    managers: null,
    managersApiState: {
        pending: false,
        success: false,
        error: false
    }
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.PENDING:
            return{
                ...state,
                managersApiState: utils.updateApiState(initialState,'pending', true, 'managersApiState')
            }
        case types.ERROR:
            return{
                ...state,
                managersApiState: utils.updateApiState(initialState,'error', action.payload, 'managersApiState')
            }
        case types.SUCCESS:
            return{
                ...state,
                data: action.payload,
                managersApiState: utils.updateApiState(initialState,'success', true, 'managersApiState')
            }
        default: 
            return state
    }
}

export default reducer