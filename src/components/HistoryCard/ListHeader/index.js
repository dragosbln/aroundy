import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Text from "../../Text/BaseText";

export default props => {
  return (
    <View style={styles.base}>
      <View style={styles.container}>
        <View style={styles.dateContainer}>
          <Text customStyle={styles.text}>Date</Text>
        </View>
        <View style={styles.typeContainer}>
          <Text customStyle={styles.text}>Type</Text>
        </View>
        <View style={styles.statusContainer}>
          <Text customStyle={styles.text}>Status</Text>
        </View>
      </View>
    </View>
  );
};
