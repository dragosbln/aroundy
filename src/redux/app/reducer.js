import types from "./types";
import mock from "../../utils/mockData";

const initialState = {
  tokens: null,
  countdownHoliday: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TOKENS:
      return {
        ...state,
        tokens: action.payload
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
