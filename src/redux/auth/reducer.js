import types from "./types";
import utils from "../../utils/functions";

const initialState = {
  tokens: null,
  setPasswordToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzUsIm9yZ2FuaXphdGlvbl9pZCI6MSwiZmlyc3ROYW1lIjoidGVzdCIsImxhc3ROYW1lIjoidGVzdG92aWNoIiwicm9sZXMiOlsiZW1wbG95ZWUiXSwicmVxdWVzdElkIjoiMGY3NTk1ZDgtMTVhMC00ZGE5LWEyMmItYmU2ZTNjNGRkOWVmIiwiaWF0IjoxNTY3MDkxNzU4LCJleHAiOjE1Njc2OTY1NTh9.uJ7J7HyblwZlmn-8mGS1tEvSRXVgQ1fVwxeBUZDb-y8',
  loginApiState: {
    pending: false,
    success: false,
    error: null
  },
  setPasswordApiState: {
    pending: false,
    success: false,
    error: null
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_PENDING:
      return {
        ...state,
        loginApiState: utils.updateApiState(initialState, "pending", true, 'loginApiState')
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        loginApiState: utils.updateApiState(initialState, "error", action.payload, 'loginApiState')
      };
    case types.SET_TOKENS:
      return {
        ...state,
        tokens: action.payload,
        loginApiState: utils.updateApiState(initialState, "success", true, 'loginApiState')
      };
      case types.PASSWORD_PENDING:
      return {
        ...state,
        setPasswordApiState: utils.updateApiState(initialState, "pending", true, 'setPasswordApiState')
      };
    case types.PASSWORD_ERROR:
      return {
        ...state,
        setPasswordApiState: utils.updateApiState(initialState, "error", action.payload, 'setPasswordApiState')
      };
    case types.PASSWORD_SUCCESS:
      return {
        ...state,
        setPasswordApiState: utils.updateApiState(initialState, "success", true, 'setPasswordApiState')
      };
      case types.SET_PASSWORD_TOKEN:
      return {
        ...state,
        setPasswordToken: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
