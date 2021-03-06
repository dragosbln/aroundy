import {connect} from 'react-redux'
import NotifyBosses from './'
import leaveAC from '../../../../redux/leave/actionCreators'

const mapStateToProps = (state) => ({
    periods: state.leave.periods,
    balance: state.user.currentUser.Balance && state.user.currentUser.Balance.remaining
})

const mapDispatchToProps = (dispatch) => ({
    clear: () => dispatch(leaveAC.clear())
})

export default connect(mapStateToProps, mapDispatchToProps)(NotifyBosses)