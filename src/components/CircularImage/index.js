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
        props.borderWidth && {
          borderWidth: props.borderWidth,
          borderColor: props.borderColor || '#000'
        },
        props.size && {
          width: props.size,
          height: props.size
        }
      ]}
    />
  );
};
