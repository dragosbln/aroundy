import React from "react";
import { Image } from "react-native";
import styles from "./styles";
import {profilePic} from '../../assets/images'

export default props => {
  return (
    <Image
      source={props.source ? {uri: props.source} : profilePic}
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
