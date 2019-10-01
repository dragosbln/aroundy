import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Dot from "../Dot";
import Text from "../Text/BaseText";

export default props => {
  return (
    <View style={styles.base}>
      {props.data && props.data.map((el, index) => (
        <View key={index} style={styles.legendSubContainer}>
          <Dot color={el.color} />
          <Text customStyle={styles.legendText}>{el.label}</Text>
        </View>
      ))}
      
    </View>
  );
};
