import authAC from './actionCreators'
import AuthService from '../../services/user'
//TODO: split login - get user logic

const login = (email, password) => async (dispatch, getState) => {
    dispatch(authAC.pending())
    try{
        const resp = await AuthService.login(email, password)
        dispatch(authAC.success(resp))
    } catch (e) {
        console.log('error from redux user',e);
        dispatch(authAC.error(e))
    }
}

export default {
    login
}