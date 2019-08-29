import Loading from ".";
import { connect } from "react-redux";
import appActions from "../../redux/app/actions";
import requestActions from "../../redux/request/actions";
import holidaysActions from "../../redux/holidays/actions";
import userActions from '../../redux/user/actions'
import authAC from "../../redux/auth/actionCreators";
import teamActions from '../../redux/team/actions'
import authActions from '../../redux/auth/actions'

//TODO: be consistent with using redux actions (actionCreators)

const mapStateToProps = state => ({
  cacheTokens: state.app.tokens,
  authTokens: state.auth.tokens,
  countdownHoliday: state.app.countdownHoliday,
  allRequests: state.requests.allRequests,
  users: state.team.users,
  currentUser: state.user.currentUser,
  // getRequestsPending: state.requests.apiState.pending,
  holidays: state.holidays.data,
  managers: state.team.managers,
  passwordToken: state.auth.setPasswordToken
});

const mapDispatchToProps = dispatch => ({
  getCachedTokens: () => dispatch(appActions.getCachedTokens()),
  getCountdownHoliday: () => dispatch(appActions.getCountdownHoliday()),
  setCountdownHoliday: holiday =>
    dispatch(holidaysActions.setCountdownHoliday(holiday)),
  setTokens: tokens => dispatch(authAC.setTokens(tokens)),
  getCurrentUser: () => dispatch(userActions.getCurrentUser()),
  getTeamMembers: () => dispatch(teamActions.getTeamMembers()),
  getAllRequests: () => dispatch(requestActions.getAllRequests()),
  getHolidays: () => dispatch(holidaysActions.getHolidays()),
  getManagers: () => dispatch(teamActions.getManagers()),
  setPasswordToken: (token) => dispatch(authActions.setPasswordToken(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading);
