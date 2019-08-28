import types from "./types";
import mock from "../../utils/mockData";
import utils from "../../utils/functions";

const initialState = {
  tokens: null,
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
    case types.PENDING:
      return {
        ...state,
        loginApiState: utils.updateApiState(initialState, "pending", true, 'loginApiState')
      };
    case types.ERROR:
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
    default:
      return state;
  }
};

export default reducer;
