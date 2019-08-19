import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Dot from "../../../../../components/Dot";
import Text from "../../../../../components/Text/BaseText";
import colors from "../../../../../assets/theme/colors";

export default props => {
  return (
    <View style={styles.base}>
      <View style={styles.legendSubContainer}>
        <Dot color={colors.green} />
        <Text customStyle={styles.legendText}>Approved</Text>
      </View>
      <View style={styles.legendSubContainer}>
        <Dot color={colors.yellow} />
        <Text customStyle={styles.legendText}>Waiting</Text>
      </View>
      <View style={styles.legendSubContainer}>
        <Dot color={colors.pink} />
        <Text customStyle={styles.legendText}>Rejected</Text>
      </View>
    </View>
  );
};
