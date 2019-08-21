import React from "react";
import { View, Image, Animated } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import Button from "../../../../components/Buttons/BaseButton";
import { dracu } from "../../../../assets/images";
import { Calendar, LocaleConfig } from "react-native-calendars";
import colors from '../../../../assets/theme/colors'
//TODO: get legend from components
import Legend from "./Legend";
import Day from './Day'

LocaleConfig.locales["custom"] = {
  ...LocaleConfig.locales[""],
  dayNamesShort: ["S", "M", "T", "W", "T", "F", "S"]
};

LocaleConfig.defaultLocale = "custom";

export default class CalendarSCREEN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: {
        buttonsBottom: new Animated.Value(-60)
      }
    };
  }

  showButtons = () => {
    Animated.spring(this.state.animation.buttonsBottom, {
      toValue: 40
    }).start();
  };

  componentDidMount() {
    // console.log("====================================");
    // console.log(this.props);
    // console.log("====================================");
  }

  render() {
    return (
      <View style={styles.base}>
        <Header title="Fly away" />
        <View style={styles.calendarContainer}>
          <View style={styles.dracuContainer}>
            <Image source={dracu} style={styles.dracu} />
          </View>
          <Calendar
            onDayPress={date => console.log(date)}
            monthFormat="MMMM"
            markedDates={{
              "2019-08-15": {
                // selected: true,
                dots: [{
                  key: 'vaca',
                  color: 'red'
                }]
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
            dayComponent={(dateObj) => {
              console.log('day '+dateObj.date.day, dateObj.marking);
              
              return(
                <Day {...dateObj} />
              )
            }}
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
        </View>
        <Animated.View
          style={[
            styles.buttonsContainer,
            {
              bottom: this.state.animation.buttonsBottom
            }
          ]}>
          <View style={styles.buttonView}>
            <Button label="CANCEL" />
          </View>
          <View style={styles.buttonView}>
            <Button label="PROCEED" />
          </View>
        </Animated.View>

        <View style={styles.legendContainer}>
          <Legend />
        </View>
      </View>
    );
  }
}
