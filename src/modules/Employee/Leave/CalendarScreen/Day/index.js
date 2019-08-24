import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import Text from "../../../../../components/Text/BaseText";
import moment from 'moment'

export default props => {
  const currentDate = new Date();
  const isThisDay =
    currentDate.getDate() === props.date.day &&
    currentDate.getMonth() + 1 === props.date.month &&
    currentDate.getFullYear() === props.date.year;

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.base}>
      <View
        style={[
          styles.dayContainer,
          props.marking.selected && styles.selectedDay,
          props.marking.startingDay && styles.startingDay,
          props.marking.endingDay && styles.endingDay
        ]}>
        <Text
          customStyle={[
            styles.dayText,
            // [0,6].includes(moment(props.date.dateString).day()) && styles.weekendDayText,
            ([0,6].includes(moment(props.date.dateString).day()) || props.date.month !== props.focusedMonth) && styles.unfocusedDaysText,
            isThisDay && styles.thisDayText
          ]}>
          {props.date.day}
        </Text>
        {props.marking.marked ? (
          <View
            style={[styles.circle, { backgroundColor: props.marking.dotColor }]}
          />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};
