import userAC from "./actionCreators";
import UserService from "../../services/user";
import responseTypes from "../../utils/responseTypes";
//TODO: split login - get user logic

const getCurrentUser = () => async (dispatch, getState) => {
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
    dispatch(userAC.allUsersSuccess(resp.data));
  } catch (e) {
    console.log("error from redux getCurrentUser", e);
    dispatch(userAC.allUsersError(e));
  }
};

const getAllTeamUsers = () => async (dispatch, getState) => {
  if (getState().user.allUsersApiState.pending) {
    return;
  }
  dispatch(userAC.allUsersPending());
  try {
    const currentUser = getState().user.currentUser;
    if (!currentUser) {
      throw new Error("No current user in Redux");
    }
    const teams = currentUser.Teams;
    const userIds = [];
    teams.forEach(team => {
      team.Users.forEach(userId => {
        if (!userIds.includes(userId) && userId !== currentUser.id) {
          userIds.push(userId);
        }
      });
    });

    const resp = await UserService.getAllTeamUsers(userIds);
    if (resp.type !== responseTypes.SUCCESS) {
      return dispatch(userAC.allUsersError(resp));
    }
    dispatch(userAC.allUsersSuccess(resp.data));
  } catch (e) {
    console.log("error from redux getCurrentUser", e);
    dispatch(userAC.allUsersError(e));
  }
};

export default {
  getCurrentUser,
  getAllUsers,
  getAllTeamUsers
};
