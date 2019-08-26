import types from "./types";
import utils from '../../utils/functions'

const initialState = {
  data: null,
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
      const newData = state.data ? [...state.data, ...action.payload] : [...action.payload]
      return {
        ...state,
        data: newData,
        apiState: utils.updateApiState(initialState, "success", true)
      };
    default:
      return state;
  }
};

export default reducer;
