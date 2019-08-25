import holidaysAC from './actionCreators'
import holidaysService from '../../services/holidays'

const getHolidays = () => async (dispatch, getState) => {
    if(getState().holidays.apiState.pending) return
    dispatch(holidaysAC.pending())
    try{
        const resp = await holidaysService.getHolidays(new Date().getFullYear())
        if(resp.success){
            dispatch(holidaysAC.success(resp.holidays))
            // if(!getState().holidays.countdownHoliday){
            //     const countdownHoliday = resp.holidays.find(el => el.name === "Christmas Day")
            //     dispatch(holidaysAC.setCountdownHoliday(countdownHoliday)) 
            // }
        } else {
            dispatch(holidaysAC.error(resp.error))
        }
    } catch (e) {
        dispatch(holidaysAC.error(e))
    }
}

const getCountdownHoliday = () => async (dispatch, getState) => {
    const holiday = await holidaysService.getCountdownHoliday()
    dispatch(holidaysAC.setCountdownHoliday(holiday))
}

const setCountdownHoliday = (holiday) => (dispatch, getState) => {
    holidaysService.setCountdownHoliday(holiday)
    dispatch(holidaysAC.setCountdownHoliday(holiday))
}

export default {
    getHolidays,
    getCountdownHoliday,
    setCountdownHoliday
}