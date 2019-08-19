//TODO - pod install
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import LoginScreen from '../modules/Login'
import TabNavigator from './tab'

const switchNav = createSwitchNavigator({
    Login: LoginScreen,
    Home: TabNavigator
}, {
    initialRouteName: 'Home'
})

export default createAppContainer(switchNav)