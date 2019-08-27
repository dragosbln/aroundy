import types from "./types";
import mock from "../../utils/mockData";
import utils from "../../utils/functions";

const initialState = {
  tokens: null,
  apiState: {
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
        apiState: utils.updateApiState(initialState, "pending", true)
      };
    case types.ERROR:
      return {
        ...state,
        apiState: utils.updateApiState(initialState, "error", action.payload)
      };
    case types.SET_TOKENS:
      return {
        ...state,
        tokens: action.payload,
        apiState: utils.updateApiState(initialState, "success", true)
      };
    default:
      return state;
  }
};

export default reducer;