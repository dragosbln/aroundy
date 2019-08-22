import {connect} from 'react-redux'
import CalendarScreen from './'
import leaveAC from '../../../../redux/leave/actionCreators'

const mapStateToProps = (state) => ({
    requests: state.user.data.Requests,
    selectedPeriods: state.leave.periods,
    selectStopPeriod: state.leave.selectStopPeriod
})

const mapDispatchToProps = (dispatch) => ({
    setTo: (date) => dispatch(leaveAC.setTo(date)),
    setFrom: (date) => dispatch(leaveAC.setFrom(date)),
    clear: () => dispatch(leaveAC.clear())
})

export default connect(mapStateToProps, mapDispatchToProps)(CalendarScreen)