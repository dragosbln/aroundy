import React from "react";
import { View, TextInput, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";
import Text from '../Text/BaseText'

export default props => {
  let gradientColors = ["#fff", "#fff"]
  if(props.gradientColors){
    gradientColors = props.gradientColors
  }
  if(!props.valid){
    gradientColors = ['#de2626', '#730f08']
  }
  return (
    <View style={styles.base}>
      <TextInput
      editable={props.editable}
        onFocus={props.onFocus}
        autoCapitalize='none'
        value={props.value}
        onChangeText={props.onChangeText}
        style={[styles.textInput, props.textStyle, !props.icon && { paddingLeft: 0 }]}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor || "#fff"}
      />
      {props.icon && <Image style={styles.icon} source={props.icon} />}
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.underline}
      />
      { !props.valid ? <Text customStyle={styles.errorText}>*Invalid input!</Text> : null}
    </View>
  );
};
