import appAC from "./actionCreators";
import UserService from "../../services/user";
import HolidaysService from '../../services/holidays'

getCachedAccessToken = () => async (dispatch, getState) => {
  const token = await UserService.getCachedAccessToken();
  dispatch(appAC.setAccessToken(token));
};

getCachedRefreshToken = () => async (dispatch, getState) => {
  const token = await UserService.getCachedRefreshToken();
  dispatch(appAC.setRefreshToken(token));
};

getCountdownHoliday = () => async (dispatch, getState) => {
    const holiday = await HolidaysService.getCountdownHoliday()
    dispatch(appAC.setCountdownHoliday(holiday))
}


export default {
  getCachedAccessToken,
  getCachedRefreshToken,
  setCountdownHoliday
};
