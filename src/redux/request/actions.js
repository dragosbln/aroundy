import requestAC from "./actionCreators";
import RequestService from "../../services/request";
import responseTypes from "../../utils/responseTypes";

const getRequests = () => async (dispatch, getState) => {
  if(getState().requests.apiState.pending){
    return
  }
  dispatch(requestAC.pending());
  try {
    if(!getState().user.allUsers){
      throw new Error('No users in Redux!')
    }
    const users = getState().user.allUsers
    const requests = [];
    for (let i = 0; i < users.length; i++) {
      const userRequests = await RequestService.getUserRequests(users[i].id);

      if (userRequests.type === responseTypes.SUCCESS) {
        requests.push(...userRequests.data);
      } else {
        throw userRequests;
      }
    }

    dispatch(requestAC.success(requests));
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
  getRequests
};
