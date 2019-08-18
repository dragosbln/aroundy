import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";

export default props => {
  return (
    <Image
      source={props.source}
      style={[
        styles.base,
        props.customStyle,
        props.border && {
          borderWidth: 4,
          borderColor: props.border
        },
        props.radius && {
          width: props.radius * 2,
          height: props.radius * 2
        }
      ]}
    />
  );
};
