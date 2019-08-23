import {connect} from 'react-redux'
import NotifyBosses from './'
import leaveAC from '../../../../redux/leave/actionCreators'

const mapStateToProps = (state) => ({
    periods: state.leave.periods
})

const mapDispatchToProps = (dispatch) => ({
    setBosses: (bosses) => dispatch(leaveAC.setBosses(bosses)),
    setComment: (comment) => dispatch(leaveAC.setComment(comment))
})

export default connect(mapStateToProps, mapDispatchToProps)(NotifyBosses)