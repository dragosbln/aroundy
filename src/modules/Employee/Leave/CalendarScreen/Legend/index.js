import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Dot from "../../../../../components/Dot";
import Text from "../../../../../components/Text/BaseText";
import colors from "../../../../../assets/theme/colors";

const data = [
  {
    label: 'Approved',
    color: colors.green
  },
  {
    label: 'Waiting',
    color: colors.yellow
  },
  {
    label: 'Rejected',
    color: colors.red
  }
]

export default props => {
  return (
    <View style={styles.base}>
      {props.data && props.data.map(el => (
        <View style={styles.legendSubContainer}>
          <Dot color={el.color} />
          <Text customStyle={styles.legendText}>{el.label}</Text>
        </View>
      ))}
      
    </View>
  );
};
