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

    dispatch(requestAC.allRequestsSuccess(requestsResp.data.reverse()));
  } catch (e) {
    dispatch(requestAC.allRequestsError(e));
  }
};

const sendRequest = (request) => async (dispatch, getState) => {
  if(getState().requests.createApiState.pending){
    return
  }
  dispatch(requestAC.createPending())
  try{
      const response = await RequestService.sendUserRequest(request)
      if(response.type !== responseTypes.SUCCESS){
        dispatch(requestAC.createError(response))
      }
      dispatch(requestAC.createSuccess())
  } catch (e) {
      dispatch(requestAC.createError(e))
  }
};

const setRequestApproved = (id, approved) => async (dispatch, getState) => {
  if(getState().requests.approvalApiState.pending){
    return
  }
  dispatch(requestAC.approvalPending())
  try{
      const response = await RequestService.setRequestApproved(id, approved)
      if(response.type !== responseTypes.SUCCESS){
        dispatch(requestAC.approvalError(response))
      }
      dispatch(requestAC.approvalSuccess())
  } catch (e) {
      dispatch(requestAC.approvalError(e))
  }
}

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
  getAllRequests,
  sendRequest,
  setRequestApproved
};
