import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Text from '../../../../../components/Text/BaseText'


export default props => {
  return (
    <View style={[
        styles.base,
        props.marking.selected && styles.selectedDay,
        props.marking.startingDay && styles.startingDay,
        props.marking.endingDay && styles.endingDay
        ]}>
      <Text>{props.date.day}</Text>
      <View style={styles.circle}></View>
    </View>
  );
};
