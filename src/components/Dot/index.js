import React from "react";
import { View } from "react-native";
import styles from "./styles";

export default props => {
  return (
    <View
      style={[
        styles.base,
        props.color ? { backgroundColor: props.color } : null
      ]}
    />
  );
};
