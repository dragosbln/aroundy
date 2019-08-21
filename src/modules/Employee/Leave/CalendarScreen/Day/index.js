import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Text from "../../../../../components/Text/BaseText";

export default props => {
  
  const currentDate = new Date();
  const isThisDay =
    currentDate.getDate() === props.date.day &&
    currentDate.getMonth() + 1 === props.date.month &&
    currentDate.getFullYear() === props.date.year;

  return (
    <View
      style={[
        styles.base,
        props.marking.selected && styles.selectedDay,
        props.marking.startingDay && styles.startingDay,
        props.marking.endingDay && styles.endingDay
      ]}
    >
      <Text
        customStyle={[
          styles.dayText,
          props.date.month !== props.currentMonth && styles.unfocusedDaysText,
          isThisDay && styles.thisDayText
        ]}
      >
        {props.date.day}
      </Text>
      {props.marking.marked ? (
        <View
          style={[styles.circle, { backgroundColor: props.marking.dotColor }]}
        />
      ) : null}
    </View>
  );
};
