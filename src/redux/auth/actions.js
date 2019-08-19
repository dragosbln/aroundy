import authAC from './actionCreators'
import AuthService from '../../services/authService'

const login = (email, password) => async (dispatch, getState) => {
    dispatch(authAC.pending())
    try{
        const resp = await AuthService.login(email, password)
        if(resp.success){
            dispatch(authAC.success(resp.data))
        } else {
            dispatch(authAC.error(resp))
        }
    } catch (e) {
        dispatch(authAC.error(e))
    }
}

export default {
    login
}