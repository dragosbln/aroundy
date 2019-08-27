import {connect} from 'react-redux'
import CreateUser from './'
import userActions from '../../../../redux/user/actions'

const mapStateToProps = (state) => ({
    pending: state.user.createApiState.pending,
    success: state.user.createApiState.success,
    error: state.user.createApiState.error
})

const mapDispatchToProps = (dispatch) => ({
    createUser: (userData) => dispatch(userActions.createUser(userData))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)