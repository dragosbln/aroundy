import userAC from "./actionCreators";
import UserService from "../../services/user";
import responseTypes from "../../utils/responseTypes";
import ContractService from '../../services/contract'
//TODO: split login - get user logic

getCurrentUser = () => async (dispatch, getState) => {
  if (getState().user.currentUserApiState.pending) {
    return;
  }
  dispatch(userAC.currentUserPending());
  try {
    const resp = await UserService.getCurrentUser();
    if (resp.type !== responseTypes.SUCCESS) {
      return dispatch(userAC.currentUserError(resp));
    }
    dispatch(userAC.currentUserSuccess(resp.data));
  } catch (e) {
    console.log("error from redux getCurrentUser", e);
    dispatch(userAC.currentUserError(e));
  }
};

const getAllUsers = () => async (dispatch, getState) => {
  if (getState().user.allUsersApiState.pending) {
    return;
  }
  dispatch(userAC.allUsersPending());
  try {
    const resp = await UserService.getAllUsers();
    if (resp.type !== responseTypes.SUCCESS) {
      return dispatch(userAC.allUsersError(resp));
    }
    const users = resp.data;
    for (let i = 0; i < users.length; i++){
        const contractResp = await ContractService.getUserContract(users[i].id)
        if(contractResp.type !== responseTypes.SUCCESS){
            throw new Error("couldn't get contract!")
        }
        users[i] = {
            ...users[i],
            Contract: contractResp.data
        }
    }
      dispatch(userAC.allUsersSuccess(resp.data));
  } catch (e) {
    console.log("error from redux getCurrentUser", e);
    dispatch(userAC.allUsersError(e));
  }
};

export default {
  getCurrentUser,
  getAllUsers
};
