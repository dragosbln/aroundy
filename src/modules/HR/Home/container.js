import Home from "./";
import { connect } from "react-redux";
import requestActions from "../../../redux/request/actions";
import holidaysActions from "../../../redux/holidays/actions";
import userActions from '../../../redux/user/actions'

const mapStateTorProps = state => ({
  requests: state.requests.data,
  countdownHoliday: state.holidays.countdownHoliday,
  balance: state.user.currentUser
    ? state.user.currentUser.Balance.remaining
    : null
});

const mapDispatchToProps = dispatch => ({
  getTeamRequests: team => dispatch(requestActions.getTeamRequests(team)),
  getCountdownHoliday: () => dispatch(holidaysActions.getCountdownHoliday()),
  getCurrentUser: () => dispatch(userActions.getCurrentUser())
});

export default connect(
  mapStateTorProps,
  mapDispatchToProps
)(Home);
