import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import Heading from "../../../../components/Text/HeadingText";
import Button from "../../../../components/Buttons/BaseButton";
import { ScrollView } from "react-native-gesture-handler";
import DaySwitch from "./daySwitch";
import utils from "../../../../utils";

export default class CalendarSCREEN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleDaysInterval: []
    };
  }

  componentDidMount = () => {
    
    const singleDays = this.props.periods
      .filter(period => period.from === period.to)
      .map(el => ({
        ...el,
        halfDay: false
      }));

    this.setState(state => ({
      ...state,
      singleDaysInterval: singleDays
    }));
  };

  onSwitchPressed = (index, value) => {
    const newSingleDays = [...this.state.singleDaysInterval];
    newSingleDays[index] = {
      ...this.state.singleDaysInterval[index],
      halfDay: value === 1
    };
    this.setState(state => ({
      ...state,
      singleDaysInterval: newSingleDays
    }));
  };

  onProceedPressed = () => {
    this.state.singleDaysInterval.forEach(interval => {
      this.props.setHalfDay(interval.id, interval.halfDay);
    });
    this.props.navigation.navigate("BalanceScreen");
  };

  onPressCancel = () => {
    this.props.clear()
    utils.resetNavigation(this.props.navigation, 'CalendarScreen')
  }

  render() {
    return (
      <View style={styles.base}>
        <Header title="Choose full/half days" />
        <View style={styles.headingContainer}>
          <Heading customStyle={styles.heading}>
            {utils.formatInterval({
              from: this.props.periods[0].from,
              to: this.props.periods[this.props.periods.length - 1].to
            })}
          </Heading>
        </View>
        <ScrollView style={styles.balanceContainer}>
          {this.state.singleDaysInterval.map((day, index) => (
            <DaySwitch
              key={index}
              onPress={val => this.onSwitchPressed(index, val)}
              date={utils.formatInterval(day)}
            />
          ))}
        </ScrollView>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonView}>
            <Button onPress={this.onPressCancel} label="CANCEL" />
          </View>
          <View style={styles.buttonView}>
            <Button onPress={this.onProceedPressed} label="PROCEED" />
          </View>
        </View>
      </View>
    );
  }
}
