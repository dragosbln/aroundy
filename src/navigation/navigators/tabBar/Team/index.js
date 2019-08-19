import {createStackNavigator} from 'react-navigation'
import TeamListScreen from '../../../../modules/HR/Team/TeamListScreen'
import ReportsScreen from '../../../../modules/HR/Team/ReportsScreen'
import IndividualReportScreen from '../../../../modules/HR/Team/IndividualReportScreen'
import RequestDetailsScreen from '../../../../modules/HR/Team/RequestDetailsScreen'

const navigator = createStackNavigator({
    TeamListScreen,
    ReportsScreen,
    IndividualReportScreen,
    RequestDetailsScreen
},{
    initialRouteName: 'TeamListScreen'
})

export default navigator