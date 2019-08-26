import types from "./types";
import mock from "../../utils/mockData";
import utils from "../../utils/functions";

const initialState = {
  currentUser: mock.loggedUser,
  allUsers: null,
  currentUserApiState: {
    pending: false,
    success: false,
    error: null
  },
  allUsersApiState: {
    pending: false,
    success: false,
    error: null
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CURRENT_USER_PENDING:
      return {
        ...state,
        currentUserApiState: utils.updateApiState(initialState, "pending", true, 'currentUserApiState')
      };
    case types.CURRENT_USER_ERROR:
      return {
        ...state,
        apiState: utils.updateApiState(initialState, "error", action.payload, 'currentUserApiState')
      };
    case types.CURRENT_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        apiState: utils.updateApiState(initialState, "success", true, 'currentUserApiState')
      };
      case types.ALL_USERS_PENDING:
        return {
          ...state,
          allUsersApiState: utils.updateApiState(initialState, "pending", true, 'allUsersApiState')
        };
      case types.ALL_USERS_ERROR:
        return {
          ...state,
          allUsersApiState: utils.updateApiState(initialState, "error", action.payload, 'allUsersApiState')
        };
      case types.ALL_USERS_SUCCESS:
        return {
          ...state,
          allUsers: action.payload,
          allUsersApiState: utils.updateApiState(initialState, "success", true, 'allUsersApiState')
        };
    default:
      return state;
  }
};

export default reducer;
