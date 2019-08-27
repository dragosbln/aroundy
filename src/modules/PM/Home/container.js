import Home from "./";
import { connect } from "react-redux";
import requestActions from "../../../redux/request/actions";
import holidaysActions from "../../../redux/holidays/actions";
import userActions from '../../../redux/user/actions'

const mapStateTorProps = state => ({
  requests: state.requests.data,
  users: state.user.allUsers,
  countdownHoliday: state.holidays.countdownHoliday,
  user: state.user.currentUser
}); 

const mapDispatchToProps = dispatch => ({
  getTeamRequests: user => dispatch(requestActions.getTeamRequests(user)),
  getCountdownHoliday: () => dispatch(holidaysActions.getCountdownHoliday()),
  getCurrentUser: () => dispatch(userActions.getCurrentUser()),
  getAllUsers: () => dispatch(userActions.getAllUsers())
});

export default connect(
  mapStateTorProps,
  mapDispatchToProps
)(Home);
