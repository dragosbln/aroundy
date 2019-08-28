import {connect} from 'react-redux'
import NotifyBosses from './'
import leaveAC from '../../../../redux/leave/actionCreators'
import teamActions from '../../../../redux/team/actions'

const mapStateToProps = (state) => ({
    periods: state.leave.periods,
    managers: state.team.managers
})

const mapDispatchToProps = (dispatch) => ({
    setBosses: (id,bosses) => dispatch(leaveAC.setBosses(id,bosses)),
    setComment: (id,comment) => dispatch(leaveAC.setComment(id,comment))
})

export default connect(mapStateToProps, mapDispatchToProps)(NotifyBosses)