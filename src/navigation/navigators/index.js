import {createSwitchNavigator} from 'react-navigation'

import Loading from './loading'
import PM from './tabBar/PM'
import Employee from './tabBar/employee'
import Login from './login'
import HR from './tabBar/HR'

const switchNavigator = createSwitchNavigator({
    Loading,
    Login,
    PM,
    Employee,
    HR
},{
    initialRouteName: 'Loading'
})

export default switchNavigator