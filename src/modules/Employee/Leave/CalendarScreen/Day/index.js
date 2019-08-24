import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import Text from "../../../../../components/Text/BaseText";
import moment from 'moment'

export default props => {
  const today = moment();
  const currentDate = moment(props.date.dateString);
  const isThisDay = today.format('YYYY MMM D') === currentDate.format('YYYY MMM D')
  return (
    <TouchableOpacity disabled={props.disabled} onPress={props.onPress} style={styles.base}>
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
            [0,6].includes(moment(props.date.dateString).day()) && styles.weekendDayText,
            (currentDate.month() + 1 !== props.focusedMonth) && styles.unfocusedDaysText,
            isThisDay && styles.thisDayText,
            props.marking.selected && styles.selectedText
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
