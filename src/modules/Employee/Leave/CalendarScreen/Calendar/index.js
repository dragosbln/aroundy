import React from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import colors from "../../../../assets/theme/colors";
import styles from './styles'

LocaleConfig.locales["custom"] = {
  ...LocaleConfig.locales[""],
  dayNamesShort: ["S", "M", "T", "W", "T", "F", "S"]
};

LocaleConfig.defaultLocale = "custom";

export default props => {
  return (
    <Calendar
      onDayPress={date => console.log(date)}
      monthFormat="MMMM"
      markedDates={{
        "2019-08-15": {
          selected: true,
          marked: true,
          color: colors.green,
          startingDay: true,
          endingDay: true
        },
        "2019-08-18": {
          selected: true,
          marked: true,
          startingDay: true,
          color: colors.green
        },
        "2019-08-19": {
          selected: true,
          marked: true,
          color: colors.green
        },
        "2019-08-20": {
          selected: true,
          marked: true,
          endingDay: true,
          color: colors.green
        }
      }}
      markingType="period"
      theme={{
        "stylesheet.calendar.header": {
          header: styles.header,
          monthText: styles.monthText,
          dayHeader: styles.dayHeader
        },
        arrowColor: colors.gray_primary,
        todayTextColor: colors.orange,
        textDayFontFamily: "Montserrat-Regular"
      }}
    />
  );
};
