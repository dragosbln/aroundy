import types from "./types";
import utils from '../../utils'

const initialState = {
  data: [],
  apiState: {
    pending: false,
    success: false,
    error: false
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
    case types.SUCCESS:
      return {
        ...state,
        data: action.payload,
        apiState: utils.updateApiState(initialState, "success", true)
      };
    default:
      return state;
  }
};

export default reducer;
