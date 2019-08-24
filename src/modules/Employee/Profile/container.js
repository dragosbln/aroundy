import Profile from './'
import {connect} from 'react-redux'
import leaveActions from '../../../redux/leave/actions'

const mapStateToProps = (state) => ({
    user: state.user.data
})

const mapDispatchToProps = (dispatch) => ({
    // cancelRequest: (id) => dispatch(leaveActions.cancelRequests(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)