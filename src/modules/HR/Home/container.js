import Home from './'
import {connect} from 'react-redux'
import requestActions from '../../../redux/request/actions'

const mapStateTorProps = (state) => ({
    requests: state.requests.data, 
    user: state.user.data
})

const mapDispatchToProps = (dispatch) => ({
    getTeamRequests: (team) => dispatch(requestActions.getTeamRequests(team))
})

export default connect(mapStateTorProps, mapDispatchToProps)(Home)