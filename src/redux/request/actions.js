import requestAC from "./actionCreators";
import RequestService from "../../services/request";
import responseTypes from '../../utils/responseTypes'

const getTeamRequests = team => async (dispatch, getState) => {
  dispatch(requestAC.pending());
  try {
    const requests = [];
    for (let i = 0; i < team.users.length; i++) {
      const userRequests = await RequestService.getUserRequest(team.users[i]);
      if(userRequests.type === responseTypes.SUCCESS){
        requests.push(...userRequests.data);
      } else {
        throw userRequests
      }
    }
    dispatch(requestAC.success(userRequests));
  } catch (e) {
    dispatch(requestAC.error(e));
  }
};

const sendRequest = () => async (dispatch, getState) => {
  // dispatch(requestAC.pending())
  // try{
  //     const requests = getState().leave.periods
  //     for(let i=0; i < requests.length; i++){
  //         //POST requests
  //         await new Promise(res => setTimeout(res, 500))
  //     }
  //     dispatch(requestAC.success())
  // } catch (e) {
  //     dispatch(requestAC.error(e))
  // }
};

const cancelRequests = id => async (dispatch, getState) => {
  // dispatch(requestAC.pending())
  // try{
  //     const requests = getState().leave.periods
  //     await new Promise(res => setTimeout(res, 500))
  //     dispatch(requestAC.success())
  // } catch (e) {
  //     dispatch(requestAC.error(e))
  // }
};

export default {
  getTeamRequests
};
