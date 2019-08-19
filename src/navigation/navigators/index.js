import {createSwitchNavigator} from 'react-navigation'

import Main from './tabBar'
import Login from './login'

const switchNavigator = createSwitchNavigator({
    Login,
    Main 
},{
    initialRouteName: 'Login'
})

export default switchNavigator