import appAC from "./actionCreators";
import UserService from "../../services/user";
import HolidaysService from '../../services/holidays'

getCachedTokens = () => async (dispatch, getState) => {
  const cachedTokens = await UserService.getCachedTokens();
  const tokens = {
      access_token: cachedTokens && cachedTokens.access_token,
      refresh_token: cachedTokens && cachedTokens.refresh_token
  }
  dispatch(appAC.setTokens(tokens));
};

getCountdownHoliday = () => async (dispatch, getState) => {
    const holiday = await HolidaysService.getCountdownHoliday()
    dispatch(appAC.setCountdownHoliday(holiday))
}


export default {
  getCachedTokens,
  getCountdownHoliday
};
