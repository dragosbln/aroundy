import {connect} from 'react-redux'
import UsersList from './'
import reportActions from '../../../../redux/report/actions'

const mapStateToProps = (state) => ({
    report: state.report.data,
    filter: state.filter.data,
    getReportSuccess: state.report.apiState.success
})

const mapDispatchToProps = (dispatch) => ({
    getReport: (config) => dispatch(reportActions.getReport(config))
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)