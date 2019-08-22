import React from "react";
import { View, TextInput, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";
import Text from '../Text/BaseText'

export default props => {
  let gradientColors = ["#fff", "#fff"]
  if(props.gradient){
    gradientColors = ["#FAD961", "#E77A39"]
  }
  if(!props.valid){
    gradientColors = ['#de2626', '#730f08']
  }
  return (
    <View style={styles.base}>
      <TextInput
        autoCapitalize='none'
        value={props.value}
        onChangeText={props.onChangeText}
        style={[styles.textInput, !props.icon && { paddingLeft: 0 }]}
        placeholder={props.placeholder}
        placeholderTextColor="#fff"
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
