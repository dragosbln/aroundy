import {createStackNavigator} from 'react-navigation'

import CalendarScreen from '../../../../modules/Employee/Leave/CalendarScreen/container'
import LeaveTypeScreen from '../../../../modules/Employee/Leave/LeaveTypeScreen/container'
import HalfDaysScreen from '../../../../modules/Employee/Leave/HalfDaysScreen'
import BalanceScreen from '../../../../modules/Employee/Leave/BalanceScreen'
import NotifyBossesScreen from '../../../../modules/Employee/Leave/NotifyBosses'
import SuccessScreen from '../../../../modules/Employee/Leave/SuccessScreen'

const stackNavigator = createStackNavigator({
    CalendarScreen,
    LeaveTypeScreen,
    HalfDaysScreen,
    BalanceScreen,
    NotifyBossesScreen,
    SuccessScreen
},{
    initialRouteName: 'LeaveTypeScreen',
    headerMode: 'none'

})

export default stackNavigator