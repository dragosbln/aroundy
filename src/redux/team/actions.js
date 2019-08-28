import teamAC from './actionCreators'

const getManagers = () => async (dispatch, getState) => {
    if(getState().user.createApiState.pending){
        return
      }
      dispatch(userAC.createPending())
      try{
        const resp = await UserService.createUser(userData)
        if (resp.type !== responseTypes.SUCCESS) {
          return dispatch(userAC.createError(resp));
        }
        dispatch(userAC.createSuccess());
      }catch (e) {
        console.log("error from redux createUser", e.response);
        dispatch(userAC.createError(e));
        // dispatch(userAC.createSuccess());
      }
}

export default {
    getManagers
}