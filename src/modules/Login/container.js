import Login from "./";
import authActions from "../../redux/auth/actions";
import appActions from "../../redux/app/actions";
import requestActions from "../../redux/request/actions";
import holidaysActions from "../../redux/holidays/actions";
import userActions from '../../redux/user/actions'

import { connect } from "react-redux";

const mapStateToProps = state => ({
  error: state.auth.apiState.error,
  pending: state.auth.apiState.pending,
  tokens: state.auth.tokens,
  countdownHoliday: state.app.countdownHoliday,
  requests: state.requests.data,
  users: state.user.allUsers,
  currentUser: state.user.currentUser,
  getRequestsPending: state.requests.apiState.pending,
  holidays: state.holidays.data
});

const mapDispatchToProps = dispatch => ({
  login: (email, passwod) => dispatch(authActions.login(email, passwod)),
  getCountdownHoliday: () => dispatch(appActions.getCountdownHoliday()),
  setCountdownHoliday: holiday =>
    dispatch(holidaysActions.setCountdownHoliday(holiday)),
  getCurrentUser: () => dispatch(userActions.getCurrentUser()),
  getAllUsers: () => dispatch(userActions.getAllUsers()),
  getTeamsRequests: teams => dispatch(requestActions.getTeamsRequests(teams)),
  getHolidays: () => dispatch(holidaysActions.getHolidays())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
