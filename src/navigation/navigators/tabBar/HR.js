import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import EmployeeHome from './EmployeeHome'
import Home from './HRHome'
import Leave from './Leave'
import Profile from './Profile'
import Team from './Team'
import TabBarIcon from "../../../components/tabBarIcon";
import {
  globe,
  helmet,
  rocket,
  astronaut,
  globeActive,
  helmetActive,
  rocketActive,
  astronautActive
} from "../../../assets/images";


export default createBottomTabNavigator(
  {
    Home,
    Leave,
    Team,
    Profile
  },
  {
    initialRouteName: "Profile",
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
            case "Leave":
              icon = rocket;
              if (focused) {
                icon = rocketActive;
              }
              break;
            case "Team":
              icon = astronaut;
              if (focused) {
                icon = astronautActive;
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
        paddingHorizontal: 20,
      },
      showLabel: false
    }
  }
);
