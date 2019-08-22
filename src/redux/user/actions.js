import authAC from './actionCreators'
import AuthService from '../../services/user'

const login = (email, password) => async (dispatch, getState) => {
    dispatch(authAC.pending())
    try{
        const resp = await AuthService.login(email, password)
        console.log('====================================resp');
        console.log(JSON.stringify(resp));
        console.log('====================================');
        dispatch(authAC.success(resp))
    } catch (e) {
        console.log('error from redux user',e);
        dispatch(authAC.error(e))
    }
}

export default {
    login
}