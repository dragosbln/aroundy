import React from "react";
import { View, TextInput, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";

export default props => {
  return (
    <View style={styles.base}>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        style={[styles.textInput, !props.icon && { paddingLeft: 0 }]}
        placeholder={props.placeholder}
        placeholderTextColor="#fff"
      />
      {props.icon && <Image style={styles.icon} source={props.icon} />}
      <LinearGradient
        colors={props.gradient ? ["#FAD961", "#E77A39"] : ["#fff", "#fff"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.underline}
      />
    </View>
  );
};
