import {createStackNavigator} from 'react-navigation'

import CalendarScreen from '../../../../modules/Employee/Leave/CalendarScreen/container'
import LeaveTypeScreen from '../../../../modules/Employee/Leave/LeaveTypeScreen/container'
import HalfDaysScreen from '../../../../modules/Employee/Leave/HalfDaysScreen/container'
import BalanceScreen from '../../../../modules/Employee/Leave/BalanceScreen/container'
import NotifyBossesScreen from '../../../../modules/Employee/Leave/NotifyBosses/container'
import SuccessScreen from '../../../../modules/Employee/Leave/SuccessScreen/container'

const stackNavigator = createStackNavigator({
    CalendarScreen,
    LeaveTypeScreen,
    HalfDaysScreen,
    BalanceScreen,
    NotifyBossesScreen,
    SuccessScreen
},{
    initialRouteName: 'NotifyBossesScreen',
    headerMode: 'none'

})

export default stackNavigator