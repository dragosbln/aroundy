import {createSwitchNavigator} from 'react-navigation'

import Loading from './loading'
import HR from './tabBar/HR'
import Employee from './tabBar/employee'
import Login from './login'

const switchNavigator = createSwitchNavigator({
    Loading,
    Login,
    HR,
    Employee
},{
    initialRouteName: 'Loading'
})

export default switchNavigator