import requestAC from "./actionCreators";
import mock from '../../utils/mockData'

const getTeamRequests = (team) => async (dispatch, getState) => {
  dispatch(requestAC.pending());
  try {
    await new Promise(res => setTimeout(res, 1500));
    //GET team requests

    dispatch(requestAC.success(mock.requests));
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
