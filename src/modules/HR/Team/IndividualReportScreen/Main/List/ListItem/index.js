import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import Text from "../../../../../../../components/Text/BaseText";
import {
  statusAppropved,
  statusPending,
  statusRejected
} from "../../../../../../../assets/images";

export default props => {
  let icon;

  switch (props.status) {
    case "approved":
      icon = statusAppropved;
      break;
    case "rejected":
      icon = statusRejected;
      break;
    case "pending":
      icon = statusPending;
      break;
    default:
      break;
  }

  return (
    <View style={styles.base}>
      <View style={styles.container}>
        <Text>30 Feb 2019</Text>
        <Text>Vacation</Text>
        <View style={styles.iconContainer}>
          <Image source={icon} style={styles.icon} />
        </View>
      </View>
    </View>
  );
};
