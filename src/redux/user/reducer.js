import types from "./types";
import mock from "../../utils/mockData";
import utils from "../../utils/functions";

const initialState = {
  currentUser: null,
  tokens: null,
  apiState: {
    pending: false,
    success: false,
    error: null
  },
  cache
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PENDING:
      return {
        ...state,
        apiState: utils.updateApiState(initialState, "pending", true)
      };
    case types.ERROR:
      return {
        ...state,
        apiState: utils.updateApiState(initialState, "error", action.payload)
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        tokens: action.payload,
        apiState: utils.updateApiState(initialState, "success", true)
      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        apiState: utils.updateApiState(initialState, "success", true)
      };
    default:
      return state;
  }
};

export default reducer;
