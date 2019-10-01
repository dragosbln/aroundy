import {connect} from 'react-redux'
import LeaveTypeScreen from './'
import leaveAC from '../../../../redux/leave/actionCreators'

const mapStateToProps = (state) => ({
    periods: state.leave.periods
})

const mapDispatchToProps = (dispatch) => ({
    setType: (id, type) => dispatch(leaveAC.setType(id, type)),
    clear: () => dispatch(leaveAC.clear())
})
 
export default connect(mapStateToProps, mapDispatchToProps)(LeaveTypeScreen)