import React from "react";
import { View } from "react-native";
import styles from "./styles";
import CircularImage from "../../../../../components/CircularImage";
import Text from "../../../../../components/Text/BaseText";

export default props => {
  return (
    <View style={styles.base}>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <CircularImage source={props.imageSource} size={48} />
        </View>
        <View style={styles.textContainer}>
          <Text customStyle={styles.nameTxt}>
            {props.name || "Test Testovich"}
          </Text>
          <Text customStyle={styles.roleTxt}>
            {props.role || "Tester(lol)"}{props.inactive && ' - Inactive'}
          </Text>
        </View>
      </View>
    </View>
  );
};
