import React from "react";
import { ImageBackground, View, Image, TouchableOpacity } from "react-native";
import { headerBg } from "../../assets/images";
import HeadingText from "../Text/HeadingText";
import styles from "./styles";

export default props => {
  const optionView = (
    <TouchableOpacity onPress={props.onOptionPressed} style={styles.optionContainer}>
      <Image source={props.option} style={styles.icon} />
    </TouchableOpacity>
  )

  return (
    <ImageBackground
      borderBottomLeftRadius={55}
      borderBottomRightRadius={55}
      style={[styles.base, props.customStyle]}
      source={props.bg || headerBg}
    >
      <View style={[styles.headingContainer, props.textContainerStyle]}>
        <HeadingText customStyle={[styles.text, props.textStyle]}>
          {props.title}
        </HeadingText>
      </View>
      {props.option ? optionView : null}
    </ImageBackground>
  );
};
