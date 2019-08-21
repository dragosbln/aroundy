import React from "react";
import { View, Image, Animated } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import Button from "../../../../components/Buttons/BaseButton";
import { dracu } from "../../../../assets/images";
import { Calendar, LocaleConfig } from "react-native-calendars";
import colors from "../../../../assets/theme/colors";
//TODO: get legend from components
import Legend from "./Legend";
import Day from "./Day";
import moment from 'moment'

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
      },
      calendar: {
        currentMonth: new Date().getMonth() + 1,
        markedDates: {}
      },
      upd: false
    };
  }

  showButtons = () => {
    Animated.spring(this.state.animation.buttonsBottom, {
      toValue: 40
    }).start();
  };

  initMarkedDates = () => {
    const markedDates = {}
    //the request is consideret having the status 'processed' if it was either approved or rejected by the HR
    this.props.requests.filter(el => el.status !== 'canceled').forEach(el => {
      let dotColor;
      if(el.status === 'processing' || el.status === 'pending') {
        dotColor = colors.yellow
      } else {
        //find HR's approval
        const approval = el.requestApprovals.find(rapp => rapp.type === 'hr')
        dotColor = approval.status === 'approved' ? colors.green : colors.pink
      }
      let currentDate = moment(el.from)
      const stopDate = moment(el.to)
      while(currentDate <= stopDate){
        const dateKey = moment(currentDate).format('YYYY-MM-DD')
        markedDates[dateKey] = {
          marked: true,
          dotColor 
        }
        currentDate = moment(currentDate).add(1, 'days')
      }
    })
    console.log(markedDates);
    
    this.setState(state => ({
      ...state,
      upd: !state.upd,
      calendar: {
        ...state.calendar,
        markedDates
      }
    }))
  }

  componentDidMount() {
    this.initMarkedDates()
  }

  onMonthChange = async (date) => {
    this.setState(state => ({
      ...state,
      calendar: {
        ...state.calendar,
        currentMonth: date.month
      }
    }))
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
            markedDates={this.state.calendar.markedDates}
            onMonthChange={this.onMonthChange}
            dayComponent={dateObj => {
              return (
                <Day
                  {...dateObj}
                  currentMonth={this.state.calendar.currentMonth}
                  upd={this.state.upd}
                />
              );
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
          ]}
        >
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
