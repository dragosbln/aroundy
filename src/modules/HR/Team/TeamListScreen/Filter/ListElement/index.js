import React from "react";
import { View, TouchableOpacity } from "react-native";
import Text from "../../../../../../components/Text/BaseText";
import styles from "./styles";
import CircleCheck from "../../../../../../components/Icons/Checkbox/Circle";
import SquareCheck from "../../../../../../components/Icons/Checkbox/Square";

export default props => {
  return (
    <View style={styles.base}>
      <Text customStyle={styles.text}>{props.name}</Text>
      <TouchableOpacity style={styles.checkContainer}>
        {props.squareCheck ? (
          <SquareCheck active={props.active} />
        ) : (
          <CircleCheck active={props.active} color={"#fff"} />
        )}
      </TouchableOpacity>
    </View>
  );
};
