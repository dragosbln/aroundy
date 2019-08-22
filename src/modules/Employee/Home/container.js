import Home from './'
import {connect} from 'react-redux'
import actions from '../../../redux/holidays/actions'

const mapStateToProps = (state) => ({
    holidays: state.holidays.data,
    countdownHoliday: state.holidays.countdownHoliday,
    balance: state.user.data.Balance.remaining
})

const mapDispatchToProps = (dispatch) => ({
    getHolidays: () => dispatch(actions.getHolidays()),
    getCachedCountdownHoliday: () => dispatch(actions.getCachedCountdownHoliday()),
    setCountdownHoliday: (holiday) => dispatch(actions.setCountdownHoliday(holiday))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)