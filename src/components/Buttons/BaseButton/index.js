import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default props => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      onPress={props.onPress}
      style={[styles.base, props.customStyle]}>
      <Text
        style={[
          styles.text,
          props.customTextStyle,
          props.disabled && styles.disabledTxt
        ]}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};
