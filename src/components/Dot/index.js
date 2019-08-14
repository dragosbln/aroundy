import React from "react";
import { ImageBackground, View } from "react-native";
import { headerBg } from "../../assets/images";
import HeadingText from "../Text/HeadingText";
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
