import {connect} from 'react-redux'
import NotifyBosses from './'
import leaveAC from '../../../../redux/leave/actionCreators'

const mapStateToProps = (state) => ({
    periods: state.leave.periods,
    balance: state.user.data.Balance.remaining
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(NotifyBosses)