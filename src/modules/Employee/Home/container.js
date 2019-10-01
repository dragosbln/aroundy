import Home from './'
import {connect} from 'react-redux'
import holidaysActions from '../../../redux/holidays/actions'
import userActions from '../../../redux/user/actions'

const mapStateToProps = (state) => ({
    holidays: state.holidays.data,
    countdownHoliday: state.holidays.countdownHoliday,
    balance: state.user.currentUser ? state.user.currentUser.Balance ? state.user.currentUser.Balance.remaining : null : null
})

const mapDispatchToProps = (dispatch) => ({
    getHolidays: () => dispatch(holidaysActions.getHolidays()),
    getCountdownHoliday: () => dispatch(holidaysActions.getCountdownHoliday()),
    setCountdownHoliday: (holiday) => dispatch(holidaysActions.setCountdownHoliday(holiday)),
    getCurrentUser: () => dispatch(userActions.getCurrentUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)