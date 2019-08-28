import {createSwitchNavigator} from 'react-navigation'

import Loading from './loading'
import PM from './tabBar/PM'
import Employee from './tabBar/employee'
import Login from './login'
import HR from './tabBar/HR'
import SetPassword from './setPassword'

const switchNavigator = createSwitchNavigator({
    Loading,
    Login,
    PM,
    Employee,
    HR,
    SetPassword
},{
    initialRouteName: 'SetPassword'
})

export default switchNavigator