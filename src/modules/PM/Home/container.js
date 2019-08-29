import Home from "./";
import { connect } from "react-redux";
import requestActions from "../../../redux/request/actions";
import holidaysActions from "../../../redux/holidays/actions";

const mapStateTorProps = state => ({
  requests: state.requests.allRequests,
  users: state.user.allUsers,
  countdownHoliday: state.holidays.countdownHoliday,
  user: state.user.currentUser,
  requestApprovalSucccess: state.requests.approvalApiState.success,
  allRequestsSuccess: state.requests.allRequestsApiState.success
}); 

const mapDispatchToProps = dispatch => ({
  getCountdownHoliday: () => dispatch(holidaysActions.getCountdownHoliday()),
  setRequestApproved: (id, approved) => dispatch(requestActions.setRequestApproved(id, approved)),
  getAllRequests: () => dispatch(requestActions.getAllRequests())
});

export default connect(
  mapStateTorProps,
  mapDispatchToProps
)(Home);
