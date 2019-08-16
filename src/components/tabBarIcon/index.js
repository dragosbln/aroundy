import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";

export default props => {
  return (
    <View style={styles.base}>
      <Image style={styles.icon} source={props.icon} />
    </View>
  );
};
