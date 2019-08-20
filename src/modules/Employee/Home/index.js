import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Heading from './Heading'
import BalanceCard from './BalanceCard'
import Main from './Main'
//https://calendarific.com

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.base}>
        <View style={styles.topImageContainer}>
          <Heading counter={'2w 4d 38m 47s'} until={'Christmas'} />
        </View>
        <View style={styles.bgCardContainer}>
            <BalanceCard days={14}/>
        </View>
        <View style={styles.mainContainer}>
          <Main />
        </View>
      </View>
    );
  }
}
