import leaveAC from './actionCreators'
import RequestService from '../../services/request'

const sendRequest = () => async (dispatch, getState) => {
    dispatch(leaveAC.pending())
    try{
        const requests = getState().leave.periods
        for(let i=0; i < requests.length; i++){
            const resp = await RequestService.sendRequest(requests[i])
            if(!resp.success){
                throw resp
            }
        }
        dispatch(leaveAC.success())
    } catch (e) {
        dispatch(leaveAC.error(e))
    }
}

const cancelRequests = (request) => async (dispatch, getState) => {
    dispatch(leaveAC.pending())
    try{
        const resp = await RequestService.cancelRequest(request)
        if(!resp.success){
            throw resp
        }
        dispatch(leaveAC.success())
    } catch (e) {
        dispatch(leaveAC.error(e))
    }
}


export default {
    sendRequest,
    cancelRequests
}