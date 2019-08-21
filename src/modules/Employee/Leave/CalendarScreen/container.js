import {connect} from 'react-redux'
import CalendarScreen from './'

const mapStateToProps = (state) => ({
    requests: state.user.data.Requests
})

export default connect(mapStateToProps)(CalendarScreen)