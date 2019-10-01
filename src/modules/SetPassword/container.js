import Login from "./";
import userActions from '../../redux/user/actions'

import { connect } from "react-redux";

const mapStateToProps = state => ({
  passwordToken: state.auth.setPasswordToken,
  pending: state.user.setPasswordApiState.pending,
  success: state.user.setPasswordApiState.success,
  error: state.user.setPasswordApiState.error
});

const mapDispatchToProps = dispatch => ({
  setPassword: (password) => dispatch(userActions.setPassword(password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
