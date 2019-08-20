import Login from './'
import authActions from '../../redux/auth/actions'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    user: state.auth.user
})

const mapDispatchToProps = (dispatch) => ({
    login: (email, passwod) => dispatch(authActions.login(email, passwod))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)