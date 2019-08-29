import {connect} from 'react-redux'
import SuccessScreen from './'
import requestActions from '../../../../redux/request/actions'
import userActions from '../../../../redux/user/actions'

const mapStateToProps = (state) => ({
    periods: state.leave.periods,
    createPending: state.requests.createApiState.pending,
    createSuccess: state.requests.createApiState.success,
    createError: state.requests.createApiState.error
})

const mapDispatchToProps = (dispatch) => ({
    createRequest: (request) => dispatch(requestActions.sendRequest(request)),
    refreshUser: () => dispatch(userActions.getCurrentUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(SuccessScreen)