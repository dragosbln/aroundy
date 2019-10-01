import actionCreators from './actionCreators'
import reportService from '../../services/report'
import responseTypes from '../../utils/responseTypes'

const getReport = (config) => async (dispatch, getState) => {
    if(getState().report.apiState.pending){
        return
    }
    dispatch(actionCreators.pending())
    try{
        const resp = await reportService.getReport(config)
        if (resp.type !== responseTypes.SUCCESS) {
          return dispatch(actionCreators.error(resp));
        }
        dispatch(actionCreators.success(resp.data));
      }catch (e) {
        console.log("error from redux deleteUser", {e});
        dispatch(actionCreators.error(e));
        // dispatch(userAC.createSuccess());
      }
}

export default {
    getReport
}