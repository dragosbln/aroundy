import Loading from './'
import {connect} from 'react-redux'
import appActions from '../../redux/app/actions'
import holidaysActions from '../../redux/holidays/actions'
import userAC from '../../redux/user/actionCreators'

const mapStateToProps = (state) => ({
    tokens: state.app.tokens,
    countdownHoliday: state.app.countdownHoliday
})

const mapDispatchToProps = (dispatch) => ({
    getCachedTokens: () => dispatch(appActions.getCachedTokens()),
    getCountdownHoliday: () => dispatch(appActions.getCountdownHoliday()),
    setCountdownHoliday: (holiday) => dispatch(holidaysActions.setCountdownHoliday(holiday)),
    setTokens: (tokens) => dispatch(userAC.setTokens(tokens))
})

export default connect(mapStateToProps, mapDispatchToProps)(Loading)