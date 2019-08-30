import {connect} from 'react-redux'
import CalendarScreen from './'
import leaveAC from '../../../../redux/leave/actionCreators'
import holidaysActions from '../../../../redux/holidays/actions'
import leaveActions from '../../../../redux/leave/actions'

const mapStateToProps = (state) => ({
    requests: state.user.currentUser.Requests,
    selectedPeriods: state.leave.periods,
    selectStopPeriod: state.leave.selectStopPeriod,
    holidays: state.holidays.data,
})

const mapDispatchToProps = (dispatch) => ({
    setTo: (date) => dispatch(leaveAC.setTo(date)),
    setFrom: (date) => dispatch(leaveAC.setFrom(date)),
    clear: () => dispatch(leaveAC.clear()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CalendarScreen)