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
import moment from "moment";
import utils from "../../../../utils";

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
        focusedMonth: new Date().getMonth() + 1,
        markedDates: {}
      }
    };
  }

  showButtons = () => {
    Animated.spring(this.state.animation.buttonsBottom, {
      toValue: 40
    }).start();
  };

  initMarkedDates = () => {
    const markedDates = {};
    //the request is consideret having the status 'processed' if it was either approved or rejected by the HR
    this.props.requests
      .filter(el => el.status !== "canceled")
      .forEach(el => {
        let dotColor;
        let type;
        if (el.status === "processing" || el.status === "pending") {
          dotColor = colors.yellow;
          type = "pending";
        } else {
          //find HR's approval
          const approval = el.requestApprovals.find(rapp => rapp.type === "hr");
          dotColor =
            approval.status === "approved" ? colors.green : colors.pink;
          type = approval.status;
        }

        utils.getDatesInterval(el.from, el.to).forEach(date => {
          markedDates[date] = {
            marked: true,
            dotColor,
            type
          };
        });
      });

    this.setState(state => ({
      ...state,
      calendar: {
        ...state.calendar,
        markedDates: {
          ...state.calendar.markedDates,
          ...markedDates
        }
      }
    }));
  };

  componentDidMount = () => {
    this.initMarkedDates();
  };

  onMonthChange = async date => {
    await this.setState(state => ({
      ...state,
      calendar: {
        ...state.calendar,
        focusedMonth: date.month,
        markedDates: {
          //spreading marked dates (uselessly), just so calendar will update when switching months
          ...state.calendar.markedDates
        }
      }
    }));
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.selectedPeriods !== this.props.selectedPeriods) {
      this.updateSelected();
    }
  };

  updateSelected = () => {
    let newMarkedDates = {
      ...this.state.calendar.markedDates
    };
    if (this.props.selectedPeriods.length === 0) {
      console.log("GOT IIIIN!");

      newMarkedDates = {};
      const currentMarkedDates = this.state.calendar.markedDates;
      for (let key in currentMarkedDates) {
        if (currentMarkedDates[key].selected) {
          if (currentMarkedDates[key].marked) {
            newMarkedDates[key] = {
              ...currentMarkedDates[key],
              selected: false,
              startingDay: false,
              endingDay: false
            };
          }
        } else {
          newMarkedDates[key] = currentMarkedDates[key];
        }
      }
    }
    this.props.selectedPeriods.forEach(period => {
      console.log(period);

      if (!period.to) {
        newMarkedDates[period.from] = {
          ...this.state.calendar.markedDates[period.from],
          selected: true,
          startingDay: true
        };
        return;
      }
      const dates = utils.getDatesInterval(period.from, period.to);

      dates.forEach((date, i) => {
        newMarkedDates[date] = {
          ...this.state.calendar.markedDates[date],
          selected: true
        };
        if (i === 0) {
          newMarkedDates[date].startingDay = true;
        }
        if (i === dates.length - 1) {
          newMarkedDates[date].endingDay = true;
        }
      });
    });
    this.setState(state => ({
      ...state,
      calendar: {
        ...state.calendar,
        markedDates: newMarkedDates
      }
    }));
  };

  onDayPress = date => {
    if (
      moment(date) <= moment() ||
      (!this.props.selectStopPeriod &&
        this.state.calendar.markedDates[date] &&
        (this.state.calendar.markedDates[date].type === "approved" ||
          this.state.calendar.markedDates[date].selected))
    ) {
      return;
    }

    if (this.props.selectStopPeriod) {
      const selectedDates = utils.getDatesInterval(
        this.props.selectedPeriods[this.props.selectedPeriods.length - 1].from,
        date
      );
      const markedDates = this.state.calendar.markedDates;
      const newlySelectedDates = selectedDates.filter(
        date => (!markedDates[date] || markedDates[date].type !== "approved") && ![0,6].includes(moment(date).day())
      );
      const intervalsToSave = utils.makeDatesInterval(newlySelectedDates);
      intervalsToSave.forEach((interval, i) => {
        if (i === 0) {
          this.props.setTo(interval.to);
        } else {
          this.props.setFrom(interval.from);
          this.props.setTo(interval.to);
        }
      });

      if (this.state.animation.buttonsBottom._value === -60) {
        this.showButtons();
      }
      return;
    }
    return this.props.setFrom(date);
  };

  onCancelPressed = () => {
    this.props.clear();
  };

  onProceedPressed = () => {
    this.props.navigation.navigate({ routeName: "LeaveTypeScreen" });
  };

  render() {
    return (
      <View style={styles.base}>
        <Header title="Fly away" />
        <View style={styles.calendarContainer}>
          <View style={styles.dracuContainer}>
            <Image source={dracu} style={styles.dracu} />
          </View>
          <Calendar
            monthFormat="MMMM"
            markedDates={this.state.calendar.markedDates}
            onMonthChange={this.onMonthChange}
            firstDay={1}
            dayComponent={dateObj => {
              return (
                <Day
                  {...dateObj}
                  onPress={() => this.onDayPress(dateObj.date.dateString)}
                  focusedMonth={this.state.calendar.focusedMonth}
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
          ]}>
          <View style={styles.buttonView}>
            <Button onPress={this.onCancelPressed} label="CANCEL" />
          </View>
          <View style={styles.buttonView}>
            <Button onPress={this.onProceedPressed} label="PROCEED" />
          </View>
        </Animated.View>

        <View style={styles.legendContainer}>
          <Legend />
        </View>
      </View>
    );
  }
}
