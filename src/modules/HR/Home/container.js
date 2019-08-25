import Home from './'
import {connect} from 'react-redux'
import requestActions from '../../../redux/request/actions'
import actions from '../../../redux/holidays/actions'


const mapStateTorProps = (state) => ({
    requests: state.requests.data, 
    countdownHoliday: state.holidays.countdownHoliday,
    balance: state.user.data.Balance.remaining
})

const mapDispatchToProps = (dispatch) => ({
    getTeamRequests: (team) => dispatch(requestActions.getTeamRequests(team)),
    getCountdownHoliday: () => dispatch(actions.getCountdownHoliday()),
})

export default connect(mapStateTorProps, mapDispatchToProps)(Home)