import React from "react";
import { View, ImageBackground } from "react-native";
import { homeBgTop } from "../../../assets/images";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";
import HeadingText from "../../../components/Text/HeadingText";
import Text from "../../../components/Text/BaseText";

export default props => {
  return (
    <LinearGradient
      style={styles.base}
      start={{ x: 0.5, y: -1 }}
      end={{ x: 0.5, y: 1.8 }}
      colors={["#F84100", "#F9D213"]}>
      <View style={styles.textContainer}>
        <View style={styles.balanceContainer}>
          <HeadingText customStyle={styles.balanceTxt}>Balance</HeadingText>
        </View>
        <View style={styles.daysContainer}>
          <HeadingText customStyle={styles.daysNumber}>
            {props.days}
          </HeadingText>
          <Text customStyle={styles.daysTxt}>Days</Text>
        </View>
      </View>
    </LinearGradient>
  );
};
