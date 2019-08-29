import userAC from "./actionCreators";
import UserService from "../../services/user";
import responseTypes from "../../utils/responseTypes";

const login = (email, password) => async (dispatch, getState) => {
  if (getState().auth.loginApiState.pending) {
    return;
  }
  dispatch(userAC.loginPending());
  try {
    const resp = await UserService.login(email, password);
    if (resp.type !== responseTypes.SUCCESS) {
      return dispatch(userAC.loginError(resp));
    }
    dispatch(userAC.setTokens(resp.data));
  } catch (e) {
    console.log("error from redux login", e);
    dispatch(userAC.loginError(e));
  }
};

const setPasswordToken = (token) => userAC.setPasswordToken(token)

export default {
  login,
  setPasswordToken
};
