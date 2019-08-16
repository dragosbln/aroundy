import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Text from "../../../../../../components/Text/BaseText";

export default props => {
  return (
    <View style={styles.base}>
      <View style={styles.container}>
        <Text>National Day</Text>
        <Text>1 Dec</Text>
      </View>
    </View>
  );
};
