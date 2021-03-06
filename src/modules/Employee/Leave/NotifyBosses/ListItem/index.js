import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import Text from "../../../../../components/Text/BaseText";
import { checked, checkedActive } from '../../../../../assets/images'

export default props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.base}>
      <View style={styles.container}>
        <Image source={props.active ? checkedActive : checked} style={styles.icon}/>
        <Text customStyle={styles.text}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
