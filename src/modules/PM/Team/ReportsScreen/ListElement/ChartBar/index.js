import React from "react";
import { View } from "react-native";
import styles from "./styles";

export default props => {
  return (
    <View style={styles.base}>
      {props.data.map((el, index) => (
        <View
          style={[
            styles.entry,
            {
              height: `${el.height * 100}%`,
              backgroundColor: el.color
            },
            index === props.data.length - 1 && styles.roundedCorners,
          ]}
        />
      ))}
    </View>
  );
};
