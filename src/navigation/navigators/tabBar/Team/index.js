import {createStackNavigator} from 'react-navigation'
import TeamListScreen from '../../../../modules/PM/Team/TeamListScreen/container'
import ReportsScreen from '../../../../modules/PM/Team/ReportsScreen/container'
import IndividualReportScreen from '../../../../modules/PM/Team/IndividualReportScreen/container'
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