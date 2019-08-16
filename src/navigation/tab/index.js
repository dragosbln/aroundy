import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import HomeScreen from "../../modules/Employee/Home";
import CalendarScreen from '../../modules/Employee/Leave/SuccessScreen'
import ProfeileScreen from '../../modules/Employee/Profile'
import TabBarIcon from "../../components/tabBarIcon";
import {
  globe,
  helmet,
  rocket,
  globeActive,
  helmetActive,
  rocketActive
} from "../../assets/images";

export default createBottomTabNavigator(
  {
    Home: HomeScreen,
    Calendar: CalendarScreen,
    Profile: ProfeileScreen
  },
  {
    initialRouteName: 'Profile',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        tabBarIcon: ({ focused }) => {
          const { routeName } = navigation.state;

          let icon;
          switch (routeName) {
            case "Home":
              icon = globe;
              if (focused) {  
                icon = globeActive;
              }
              break;
            case "Calendar":
              icon = rocket;
              if (focused) {
                icon = rocketActive;
              }
              break;
            case "Profile":
              icon = helmet;
              if (focused) {
                icon = helmetActive;
              }
              break;
            default:
          }

          return <TabBarIcon icon={icon} />;
        }
      };
    },
    tabBarOptions: {
      style: {
        height: 92,
        borderRadius: 100,
        shadowRadius: 3,
        shadowOpacity: 0.2,
        shadowOffset: {
          height: 1,
          width: 1
        },
        elevation: 1,
        paddingHorizontal: 20
      },
      showLabel: false
    }
  }
);
