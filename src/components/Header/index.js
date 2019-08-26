import React from "react";
import { ImageBackground, View, Image, TouchableOpacity } from "react-native";
import { headerBg } from "../../assets/images";
import HeadingText from "../Text/HeadingText";
import CircularImage from "../CircularImage";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";

export default props => {
  const optionView = (
    <TouchableOpacity
      onPress={props.onOptionPressed}
      style={styles.optionContainer}
    >
      <Image source={props.option} style={styles.icon} />
    </TouchableOpacity>
  );

  const pictureView = (
    <View style={styles.pictureView}>
      <TouchableOpacity style={styles.backContainer}>
        <Icon name="chevron-left" size={35} color="#fff" />
      </TouchableOpacity>
      <CircularImage source={props.imageSource} radius={16} border={"yellow"} />
    </View>
  );

  return (
    <ImageBackground
      borderBottomLeftRadius={55}
      borderBottomRightRadius={55}
      style={[styles.base, props.customStyle]}
      source={props.bg || headerBg}
    >
      <View
        style={[
          styles.headingContainer,
          props.textContainerStyle,
          props.picture && {
            marginLeft: "2%"
          }
        ]}
      >
        {props.picture && pictureView}
        <HeadingText customStyle={[styles.text, props.textStyle]}>
          {props.title}
        </HeadingText>
      </View>
      {props.option ? optionView : null}
    </ImageBackground>
  );
};
