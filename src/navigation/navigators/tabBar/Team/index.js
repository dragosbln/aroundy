import {createStackNavigator} from 'react-navigation'
import TeamListScreen from '../../../../modules/PM/Team/TeamListScreen'
import ReportsScreen from '../../../../modules/PM/Team/ReportsScreen'
import IndividualReportScreen from '../../../../modules/PM/Team/IndividualReportScreen'
import RequestDetailsScreen from '../../../../modules/PM/Team/RequestDetailsScreen'

const navigator = createStackNavigator({
    TeamListScreen,
    ReportsScreen,
    IndividualReportScreen,
    RequestDetailsScreen
},{
    initialRouteName: 'TeamListScreen',
    headerMode: 'none'
})

export default navigator