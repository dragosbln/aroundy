import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import Text from "../../../../../components/Text/BaseText";
import SwitchSelector from "react-native-switch-selector";

const options = [
  {
    label: "Full day",
    value: 0
  },
  {
    label: "Half day",
    value: 1
  }
];

export default props => {
  return (
    <View style={styles.base}>
      <Text customStyle={styles.dateTxt}>26 August</Text>
      <SwitchSelector
        style={styles.switchContainer}
        textStyle={styles.switchTextStyle}
        selectedTextStyle={styles.switchSelectedTextStyle}
        options={options}
      />
    </View>
  );
};
