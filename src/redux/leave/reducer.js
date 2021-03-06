import types from "./types";
import utils from '../../utils/functions'

const mockData = [
  { id: 0, from: "2019-09-23", to: "2019-09-25", type: 'medical', notify: [1], comment: 'nada' },
  // { id: 1, from: "2019-09-02", to: "2019-09-05" },
  // { id: 2, from: "2019-09-10", to: "2019-09-11" },
  // { id: 3, from: "2019-09-13", to: "2019-09-13" }
];

const initialState = {
  periods: [],
  selectStopPeriod: false,
  apiState: {
    pending: false,
    success: false,
    error: false
  }
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
        periods: [],
        selectStopPeriod: false
      };
    case types.SET_TYPE: {
      const newState = { ...state };
      newState.periods = [...state.periods];
      newState.periods[action.payload.id] = {
        ...newState.periods[action.payload.id],
        type: action.payload.type
      };
      return newState;
    }
    case types.SET_HALF_DAY: {
      const newState = { ...state };
      newState.periods = [...state.periods];
      newState.periods[action.payload.id] = {
        ...newState.periods[action.payload.id],
        halfDay: action.payload.halfDay
      };

      return newState;
    }

    case types.SET_BOSSES:{
      const newState = { ...state };
      newState.periods = [...state.periods];
      newState.periods[action.payload.id] = {
        ...newState.periods[action.payload.id],
        notify: action.payload.bosses
      };

      return newState;
    }

    case types.SET_COMMENT:{
      const newState = { ...state };
      newState.periods = [...state.periods];
      newState.periods[action.payload.id] = {
        ...newState.periods[action.payload.id],
        comment: action.payload.comment
      };

      return newState;
    }
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
        apiState: utils.updateApiState(initialState, "success", true)
      };
    default:
      return state;
  }
};

export default reducer;
