import {createSwitchNavigator} from 'react-navigation'

import HR from './tabBar/HR'
import Employee from './tabBar/employee'
import Login from './login'

const switchNavigator = createSwitchNavigator({
    Login,
    HR,
    Employee
},{
    initialRouteName: 'HR'
})

export default switchNavigator