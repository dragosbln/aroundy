import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";

export default props => {
  return (
    <View style={styles.base}>
      <Image
        style={[
          styles.icon,
          props.size && { width: props.size, height: props.size }
        ]}
        source={props.icon}
      />
    </View>
  );
};
