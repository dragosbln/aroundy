import Loading from ".";
import { connect } from "react-redux";
import appActions from "../../redux/app/actions";
import requestActions from "../../redux/request/actions";
import holidaysActions from "../../redux/holidays/actions";
import userActions from '../../redux/user/actions'
import authAC from "../../redux/auth/actionCreators";

const mapStateToProps = state => ({
  tokens: state.app.tokens,
  countdownHoliday: state.app.countdownHoliday,
  requests: state.requests.data,
  users: state.user.allUsers,
  currentUser: state.user.currentUser,
  getRequestsPending: state.requests.apiState.pending,
  holidays: state.holidays.data
});

const mapDispatchToProps = dispatch => ({
  getCachedTokens: () => dispatch(appActions.getCachedTokens()),
  getCountdownHoliday: () => dispatch(appActions.getCountdownHoliday()),
  setCountdownHoliday: holiday =>
    dispatch(holidaysActions.setCountdownHoliday(holiday)),
  setTokens: tokens => dispatch(authAC.setTokens(tokens)),
  getCurrentUser: () => dispatch(userActions.getCurrentUser()),
  getAllUsers: () => dispatch(userActions.getAllUsers()),
  getRequests: () => dispatch(requestActions.getRequests()),
  getHolidays: () => dispatch(holidaysActions.getHolidays())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading);
