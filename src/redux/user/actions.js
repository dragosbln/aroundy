import userAC from './actionCreators'
import UserService from '../../services/user'
import responseTypes from '../../utils/responseTypes'
//TODO: split login - get user logic

const login = (email, password) => async (dispatch, getState) => {
    if(getState().user.apiState.pending){
        return
    }
    dispatch(userAC.pending())
    try{
        const resp = await UserService.login(email, password)
        if(resp.type !== responseTypes.SUCCESS){
            return dispatch(userAC.error(resp))
        }
        dispatch(userAC.setTokens(resp.data))
    } catch (e) {
        console.log('error from redux login',e);
        dispatch(userAC.error(e))
    }
}

getCurrentUser = () => async (dispatch, getState) => {
    if(getState().user.apiState.pending){
        return
    }
    dispatch(userAC.pending())
    try{
        const resp = await UserService.getCurrentUser()
        if(resp.type !== responseTypes.SUCCESS){
            return dispatch(userAC.error(resp))
        }
        dispatch(userAC.getUserSuccess(resp.data))
    } catch (e) {
        console.log('error from redux getCurrentUser',e);
        dispatch(userAC.error(e))
    }
}

const getAllUsers = () => async (dispatch, getState) => {
    if(getState().user.apiState.pending){
        return
    }
    dispatch(userAC.pending())
    try{
        const resp = await UserService.getAllUsers()
        if(resp.type !== responseTypes.SUCCESS){
            return dispatch(userAC.error(resp))
        }
        dispatch(userAC.getUserSuccess(resp.data))
    } catch (e) {
        console.log('error from redux getCurrentUser',e);
        dispatch(userAC.error(e))
    }
}

export default {
    login,
    getCurrentUser,
    getAllUsers
}