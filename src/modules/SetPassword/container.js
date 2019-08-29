import Login from "./";
import userActions from '../../redux/user/actions'

import { connect } from "react-redux";

const mapStateToProps = state => ({
  passwordToken: state.auth.setPasswordToken,
  setPasswordSuccess: state.user.setPasswordApiState.pending
});

const mapDispatchToProps = dispatch => ({
  setPassword: (password) => dispatch(userActions.setPassword(password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
