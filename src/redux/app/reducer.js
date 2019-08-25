import types from "./types";
import mock from "../../utils/mockData";

const initialState = {
  tokens: null,
  countdownHoliday: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ACCESS_TOKEN:
      return {
        ...state,
        tokens: {
          ...state.tokens,
          access_token: action.payload
        }
      };
    case types.SET_REFRESH_TOKEN:
      return {
        ...state,
        tokens: {
          ...state.tokens,
          refresh_token: action.payload
        }
      };
    case types.SET_COUNTDOWN_HOLIDAY:
      return {
        ...state,
        countdownHoliday: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
