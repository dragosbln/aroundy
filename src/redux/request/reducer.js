import types from "./types";
import utils from "../../utils/functions";

const initialState = {
  allRequests: null,
  allRequestsApiState: {
    pending: false,
    success: false,
    error: null
  },
  createApiState: {
    pending: false,
    success: false,
    error: null
  },
  approvalApiState: {
    pending: false,
    success: false,
    error: null
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ALL_PENDING:
      return {
        ...state,
        allRequestsApiState: utils.updateApiState(
          initialState,
          "pending",
          true,
          "allRequestsApiState"
        )
      };
    case types.ALL_ERROR:
      return {
        ...state,
        allRequestsApiState: utils.updateApiState(
          initialState,
          "error",
          action.payload,
          "allRequestsApiState"
        )
      };
    case types.ALL_SUCCESS:
      return {
        ...state,
        allRequests: action.payload,
        allRequestsApiState: utils.updateApiState(
          initialState,
          "success",
          true,
          "allRequestsApiState"
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
      case types.APPROVAL_PENDING:
      return {
        ...state,
        approvalApiState: utils.updateApiState(
          initialState,
          "pending",
          true,
          "approvalApiState"
        )
      };
    case types.APPROVAL_ERROR:
      return {
        ...state,
        approvalApiState: utils.updateApiState(
          initialState,
          "error",
          action.payload,
          "approvalApiState"
        )
      };
    case types.APPROVAL_SUCCESS:
      return {
        ...state,
        approvalApiState: utils.updateApiState(
          initialState,
          "success",
          true,
          "approvalApiState"
        )
      };
    default:
      return state;
  }
};

export default reducer;
