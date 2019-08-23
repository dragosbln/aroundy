import {connect} from 'react-redux'
import HalfDayScreen from './'
import leaveAC from '../../../../redux/leave/actionCreators'

const mapStateToProps = (state) => ({
    periods: state.leave.periods
})

const mapDispatchToProps = (dispatch) => ({
    setHalfDay: (id, ishalfDay) => dispatch(leaveAC.setHalfDay(id, ishalfDay)),
    clear: () => dispatch(leaveAC.clear())
})

export default connect(mapStateToProps, mapDispatchToProps)(HalfDayScreen)