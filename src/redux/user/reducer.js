import types from "./types";
import mock from "../../utils/mockData";
import utils from "../../utils/functions";

const initialState = {
  currentUser: null,
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
  },
  createApiState: {
    pending: false,
    success: false,
    error: null
  },
  deleteApiState: {
    pending: false,
    success: false,
    error: null
  },
  setPasswordApiState: {
    pending: false,
    success: false,
    error: null
  }
};
//TODO: handle delete actions
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CURRENT_USER_PENDING:
      return {
        ...state,
        currentUserApiState: utils.updateApiState(
          initialState,
          "pending",
          true,
          "currentUserApiState"
        )
      };
    case types.CURRENT_USER_ERROR:
      return {
        ...state,
        apiState: utils.updateApiState(
          initialState,
          "error",
          action.payload,
          "currentUserApiState"
        )
      };
    case types.CURRENT_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        apiState: utils.updateApiState(
          initialState,
          "success",
          true,
          "currentUserApiState"
        )
      };
    case types.ALL_USERS_PENDING:
      return {
        ...state,
        allUsersApiState: utils.updateApiState(
          initialState,
          "pending",
          true,
          "allUsersApiState"
        )
      };
    case types.ALL_USERS_ERROR:
      return {
        ...state,
        allUsersApiState: utils.updateApiState(
          initialState,
          "error",
          action.payload,
          "allUsersApiState"
        )
      };
    case types.ALL_USERS_SUCCESS:
      return {
        ...state,
        allUsers: action.payload,
        allUsersApiState: utils.updateApiState(
          initialState,
          "success",
          true,
          "allUsersApiState"
        )
      };
    case types.CREATE_PENDING:
      return {
        ...state,
        createApiState: utils.updateApiState(
          initialState,
          "pending",
          true,
          "createApiState"
        )
      };
    case types.CREATE_ERROR:
      return {
        ...state,
        createApiState: utils.updateApiState(
          initialState,
          "error",
          action.payload,
          "createApiState"
        )
      };
    case types.CREATE_SUCCESS:
      return {
        ...state,
        createApiState: utils.updateApiState(
          initialState,
          "success",
          true,
          "createApiState"
        )
      };
      case types.SET_PASSWORD_PENDING:
        return {
          ...state,
          setPasswordApiState: utils.updateApiState(
            initialState,
            "pending",
            true,
            "setPasswordApiState"
          )
        };
      case types.SET_PASSWORD_ERROR:
        return {
          ...state,
          setPasswordApiState: utils.updateApiState(
            initialState,
            "error",
            action.payload,
            "createApiState"
          )
        };
      case types.SET_PASSWORD_SUCCESS:
        return {
          ...state,
          setPasswordApiState: utils.updateApiState(
            initialState,
            "success",
            true,
            "setPasswordApiState"
          )
        };
    default:
      return state;
  }
};

export default reducer;
