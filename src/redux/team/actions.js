import teamAC from './actionCreators'
import TeamService from '../../services/team'
import responseTypes from '../../utils/responseTypes'

const getManagers = () => async (dispatch, getState) => {
    if(getState().team.managersApiState.pending){
        return
      }
      dispatch(teamAC.managersPending())
      try{
        const resp = await TeamService.getManagers()
        if (resp.type !== responseTypes.SUCCESS) {
          return dispatch(teamAC.managersError(resp));
        }
        dispatch(teamAC.managersSuccess(resp.data));
      }catch (e) {
        console.log("error from redux getTeam", e.response);
        dispatch(teamAC.managersError(e));
        // dispatch(userAC.createSuccess());
      }
}

const getTeamMembers = () => async (dispatch, getState) => {
  if(getState().team.usersApiState.pending){
      return
    }
    dispatch(teamAC.usersPending())
    try{
      const resp = await TeamService.getTeamMembers()
      if (resp.type !== responseTypes.SUCCESS) {
        return dispatch(teamAC.usersError(resp));
      }
      dispatch(teamAC.usersSuccess(resp.data));
    }catch (e) {
      console.log("error from redux getTeam", e.response);
      dispatch(teamAC.usersError(e));
      // dispatch(userAC.createSuccess());
    }
}

export default {
    getManagers,
    getTeamMembers
}