import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Text from "../../../../../../../components/Text/BaseText";

export default props => {
  return (
    <View style={styles.base}>
      <View style={styles.container}>
      <Text customStyle={styles.text}>Date</Text>
      <Text customStyle={styles.text}>Type</Text>
        <Text customStyle={styles.text}>Status</Text>
      </View>
    </View>
  );
};
