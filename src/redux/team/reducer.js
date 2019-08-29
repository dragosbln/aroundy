import types from './types'
import utils from '../../utils/functions'

const initialState = {
    managers: null,
    users: null,
    managersApiState: {
        pending: false,
        success: false,
        error: false
    },
    usersApiState: {
        pending: false,
        success: false,
        error: false
    }
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.MANAGERS_PENDING:
            return{
                ...state,
                managersApiState: utils.updateApiState(initialState,'pending', true, 'managersApiState')
            }
        case types.MANAGERS_ERROR:
            return{
                ...state,
                managersApiState: utils.updateApiState(initialState,'error', action.payload, 'managersApiState')
            }
        case types.MANAGERS_SUCCESS:
            return{
                ...state,
                managers: action.payload,
                managersApiState: utils.updateApiState(initialState,'success', true, 'managersApiState')
            }
            case types.USERS_PENDING:
            return{
                ...state,
                usersApiState: utils.updateApiState(initialState,'pending', true, 'usersApiState')
            }
        case types.USERS_ERROR:
            return{
                ...state,
                usersApiState: utils.updateApiState(initialState,'error', action.payload, 'usersApiState')
            }
        case types.USERS_SUCCESS:
            return{
                ...state,
                users: action.payload,
                usersApiState: utils.updateApiState(initialState,'success', true, 'usersApiState')
            }
        default: 
            return state
    }
}

export default reducer