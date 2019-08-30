import types from "./types";
import utils from '../../utils/functions'

const mockData = [
  { id: 0, from: "2019-09-23", to: "2019-09-25", type: 'medical', notify: [1], comment: 'nada' },
  // { id: 1, from: "2019-09-02", to: "2019-09-05" },
  // { id: 2, from: "2019-09-10", to: "2019-09-11" },
  // { id: 3, from: "2019-09-13", to: "2019-09-13" }
];

const initialState = {
  data: null
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
