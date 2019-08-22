import types from "./types";

const mockData = [
  { id: 0, from: "2019-08-23", to: "2019-08-23" },
  { id: 1, from: "2019-09-02", to: "2019-09-05" },
  { id: 2, from: "2019-09-10", to: "2019-09-11" },
  { id: 3, from: "2019-09-13", to: "2019-09-13" }
];

const initialState = {
  periods: mockData,
  selectStopPeriod: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FROM:
      return {
        ...state,
        periods: [
          ...state.periods,
          {
            id: state.periods.length,
            from: action.payload
          }
        ],
        selectStopPeriod: true
      };
    case types.SET_TO: {
      const lastPeriod = {
        ...state.periods[state.periods.length - 1],
        to: action.payload
      };
      const newState = {
        ...state,
        selectStopPeriod: false
      };
      newState.periods = [...newState.periods];
      newState.periods[newState.periods.length - 1] = lastPeriod;
      return newState;
    }

    case types.CLEAR:
      return {
        ...state,
        periods: []
      };
    case types.SET_TYPE:
      {
        const newState = { ...state };
        newState.periods = { ...state.periods };
        newState.periods[action.payload.id] = {
          ...newState.periods[action.payload.id],
          type: action.payload.type
        };
      }

      return;
    default:
      return state;
  }
};

export default reducer;
