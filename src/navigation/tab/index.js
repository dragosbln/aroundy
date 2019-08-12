import React from 'react'
import {createBottomTabNavigator} from 'react-navigation'
import HomeScreen from '../../modules/Home'
import TabBarIcon from '../../components/tabBarIcon'
import { globe, helmet, rocket } from '../../assets/images'

export default createBottomTabNavigator({
    Home: HomeScreen,
    Fly: HomeScreen,
    Profile: HomeScreen
}, {
    defaultNavigationOptions: ({navigation}) => {
        return({
            tabBarIcon: ({focused}) => {
                const {routeName} = navigation.state

                let icon
                switch(routeName) {
                    case 'Home': 
                        icon = globe
                        break
                    case 'Fly':
                        icon=rocket
                        break
                    case 'Profile':
                        icon=helmet
                        break
                    default: 
                }

                return(
                    <TabBarIcon icon={icon} />
                )
            }
        })
    },
    tabBarOptions: {
        style: {
            height: 92,
            borderRadius: 100,
            marginBottom: 10,
            shadowRadius: 2,
            elevation: 1,
            paddingHorizontal: 20
        },
        showLabel: false
    }
})