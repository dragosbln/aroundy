import leaveAC from './actionCreators'

const sendRequest = () => async (dispatch, getState) => {
    dispatch(leaveAC.pending())
    try{
        const requests = getState().leave.periods
        for(let i=0; i < requests.length; i++){
            //POST requests
            await new Promise(res => setTimeout(res, 500))
        }
        dispatch(leaveAC.success())
    } catch (e) {
        dispatch(leaveAC.error(e))
    }
}

const cancelRequests = (id) => async (dispatch, getState) => {
    // dispatch(leaveAC.pending())
    // try{
    //     const requests = getState().leave.periods
    //     await new Promise(res => setTimeout(res, 500))
    //     dispatch(leaveAC.success())
    // } catch (e) {
    //     dispatch(leaveAC.error(e))
    // }
}


export default {
    sendRequest,
    cancelRequests
}