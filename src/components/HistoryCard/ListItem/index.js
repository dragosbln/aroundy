import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import Text from "../../Text/BaseText";
import {
  statusAppropved,
  statusPending,
  statusRejected
} from "../../../assets/images";

export default props => {
  let icon;

  switch (props.status) {
    case "approved":
      icon = statusAppropved;
      break;
    case "processed":
      icon = statusAppropved;
      break;
    case "not-approved":
      icon = statusRejected;
      break;
    case "pending":
      icon = statusPending;
      break;
    case "processing":
      icon = statusPending;
      break;
    default:
      break;
  }

  return (
    <View style={styles.base}>
      <View style={styles.container}>
        <View style={styles.dateContainer}>
          <Text>{props.date}</Text>
        </View>
        <View style={styles.typeContainer}>
          <Text>{props.type}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={icon} style={styles.icon} />
        </View>
      </View>
    </View>
  );
};
