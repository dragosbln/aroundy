import teamAC from './actionCreators'
import TeamService from '../../services/team'
import responseTypes from '../../utils/responseTypes'

const getManagers = () => async (dispatch, getState) => {
    if(getState().user.createApiState.pending){
        return
      }
      dispatch(teamAC.pending())
      try{
        const resp = await TeamService.getManagers()
        if (resp.type !== responseTypes.SUCCESS) {
          return dispatch(teamAC.error(resp));
        }
        dispatch(teamAC.success(resp.data));
      }catch (e) {
        console.log("error from redux getTeam", e.response);
        dispatch(teamAC.error(e));
        // dispatch(userAC.createSuccess());
      }
}

export default {
    getManagers
}