import Login from './'
import userActions from '../../redux/user/actions'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    token: state.user.tokens ? state.user.tokens.access_token : null,
    error: state.user.apiState.error,
    pending: state.user.apiState.pending
})

const mapDispatchToProps = (dispatch) => ({
    login: (email, passwod) => dispatch(userActions.login(email, passwod))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)