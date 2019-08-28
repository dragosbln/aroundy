import requestAC from "./actionCreators";
import RequestService from "../../services/request";
import responseTypes from "../../utils/responseTypes";


const getAllRequests = () => async (dispatch, getState) => {
  if(getState().requests.allRequestsApiState.pending){
    return
  }
  dispatch(requestAC.allRequestsPending());
  try {
    const requestsResp = await RequestService.getRequests()
    if(requestsResp.type !== responseTypes.SUCCESS){
      dispatch(requestAC.allRequestsError(requestsResp));
    }

    dispatch(requestAC.allRequestsSuccess(requestsResp.data.filter(req => req.user_id !== getState().user.currentUser.id)));
  } catch (e) {
    dispatch(requestAC.allRequestsError(e));
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
  getAllRequests
};
