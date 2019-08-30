import types from "./types";
import utils from '../../utils/functions'

const mockData = {
  from: "24/08/2019", 
  to: "30/10/2019",
  statuses: ["approved", "not-approved", "processed"],
  types: ["medical", "annual", "emergency"],
  users: [4, 2, 3]
}

const initialState = {
  data: mockData
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FILTERS:
      return {
        ...state,
        data: action.payload
      };
    
    default:
      return state;
  }
};

export default reducer;
