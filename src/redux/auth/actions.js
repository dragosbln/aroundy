import userAC from "./actionCreators";
import UserService from "../../services/user";
import responseTypes from "../../utils/responseTypes";

const login = (email, password) => async (dispatch, getState) => {
  if (getState().auth.loginApiState.pending) {
    return;
  }
  dispatch(userAC.pending());
  try {
    const resp = await UserService.login(email, password);
    if (resp.type !== responseTypes.SUCCESS) {
      return dispatch(userAC.error(resp));
    }
    dispatch(userAC.setTokens(resp.data));
  } catch (e) {
    console.log("error from redux login", e);
    dispatch(userAC.error(e));
  }
};



export default {
  login,
};
