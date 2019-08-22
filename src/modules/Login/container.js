import Login from './'
import userActions from '../../redux/user/actions'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    user: state.user.data,
    error: state.user.apiState.error
})

const mapDispatchToProps = (dispatch) => ({
    login: (email, passwod) => dispatch(userActions.login(email, passwod))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)