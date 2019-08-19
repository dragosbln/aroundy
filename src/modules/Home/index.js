import React from "react";
import { View, ImageBackground } from "react-native";
import { homeBgTop } from "../../assets/images";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";
import HeadingText from "../../components/Text/HeadingText";
import Text from "../../components/Text/BaseText";
import Heading from './Heading'
import BalanceCard from './BalanceCard'
import Main from './Main'

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
