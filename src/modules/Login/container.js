import Login from "./";
import authActions from "../../redux/auth/actions";
import appActions from "../../redux/app/actions";
import requestActions from "../../redux/request/actions";
import holidaysActions from "../../redux/holidays/actions";
import userActions from '../../redux/user/actions'
import teamActions from '../../redux/team/actions'

import { connect } from "react-redux";

const mapStateToProps = state => ({
  error: state.auth.loginApiState.error,
  pending: state.auth.loginApiState.pending,
  tokens: state.auth.tokens,
  countdownHoliday: state.app.countdownHoliday,
  requests: state.requests.data,
  users: state.user.allUsers,
  currentUser: state.user.currentUser,
  getRequestsPending: state.requests.apiState.pending,
  holidays: state.holidays.data,
  managers: state.team.managers
});

const mapDispatchToProps = dispatch => ({
  login: (email, passwod) => dispatch(authActions.login(email, passwod)),
  getCountdownHoliday: () => dispatch(appActions.getCountdownHoliday()),
  setCountdownHoliday: holiday =>
    dispatch(holidaysActions.setCountdownHoliday(holiday)),
  getCurrentUser: () => dispatch(userActions.getCurrentUser()),
  getAllUsers: () => dispatch(userActions.getAllUsers()),
  getRequests: () => dispatch(requestActions.getRequests()),
  getHolidays: () => dispatch(holidaysActions.getHolidays()),
  getAllTeamUsers: () => dispatch(userActions.getAllTeamUsers()),
  getManagers: () => dispatch(teamActions.getManagers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
