import {connect} from 'react-redux'
import SuccessScreen from './'
import actions from '../../../../redux/leave/actions'

const mapStateToProps = (state) => ({
    periods: state.leave.periods,
    pending: state.leave.apiState.pending,
    success: state.leave.apiState.success,
    error: state.leave.apiState.error
})

const mapDispatchToProps = (dispatch) => ({
    sendRequests: () => dispatch(actions.sendRequest()),
    cancelRequests: () => dispatch(actions.cancelRequests())
})

export default connect(mapStateToProps, mapDispatchToProps)(SuccessScreen)