import React from "react";
import { View } from "react-native";
import styles from "./styles";
import HeadingText from "../Text/HeadingText";
import Text from "../Text/BaseText";

export default props => {
  return (
    <View style={styles.base}>
      <HeadingText
        customStyle={{ ...styles.counterHeading, ...props.counterStyle }}
      >
        {props.counter}
      </HeadingText>
      <Text customStyle={{...styles.counterFooter, ...props.footerStyle}}>until {props.until}</Text>
    </View>
  );
};
