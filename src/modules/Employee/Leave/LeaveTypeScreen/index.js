import React from "react";
import { View, Dimensions, Animated } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import { WheelPicker } from "react-native-wheel-picker-android";
import Button from "../../../../components/Buttons/BaseButton";
import appData from "../../../../utils/appData";
import utils from "../../../../utils";
import AnimatedHeading from "../../../../components/AnimatedHeading";
//TODO: add arrows
export default class CalendarSCREEN extends React.Component {
  constructor(props) {
    super(props);
    this.screenWidth = Dimensions.get("window").width;
    this.pickerOptions = appData.leaveTypes;
    this.state = {
      currentPerdiod: 0,
      showingContainer: "",
      hidingContainer: "",
      triggerAnimation: true,
      pickerSelectedIndex: 5,
      proceedButtonText: 'NEXT'

    };
  }

  componentDidMount = () => {
    this.setState(state => ({
      ...state,
      showingContainer: utils.formatInterval(this.props.periods[0]),
      hidingContainer: this.props.periods[1]
        ? utils.formatInterval(this.props.periods[1])
        : null,
      proceedButtonText: this.props.periods.length > 1 ? 'NEXT' : 'PROCEED'
    }));
  };

  nextScreen = () => {
    const singleDayHolidays = this.props.periods.filter(
      period => period.from === period.to
    );
    if (singleDayHolidays.length > 0) {
      return this.props.navigation.navigate("HalfDaysScreen");
    }
    return this.props.navigation.navigate("BalanceScreen");
  };

  onProceedPress = () => {
    this.props.setType(
      this.props.periods[this.state.currentPerdiod].id,
      Object.keys(this.pickerOptions)[this.state.pickerSelectedIndex]
    );
    if(this.state.currentPerdiod >= this.props.periods.length - 2){
      this.setState(state => ({
        ...state,
        proceedButtonText: 'PROCEED'
      }))
    }
    if (this.state.currentPerdiod >= this.props.periods.length - 1) {
      return this.nextScreen();
    }
    this.setState(state => ({
      ...state,
      pickerSelectedIndex: 5,
      triggerAnimation: !state.triggerAnimation
    }));
  };

  onPressCancel = () => {
    this.props.clear();
    utils.resetNavigation(this.props.navigation, "CalendarScreen");
  };


  onPickerChange = index => {
    this.setState(
      (state = {
        ...this.state,
        pickerSelectedIndex: index
      })
    );
  };

  updateShowingContainer = () => {
    return new Promise(async res => {
      await this.setState(state => ({
        ...state,
        showingContainer: state.hidingContainer
      }));
      res()
    }) 
  };

  nextStep = () => {
    return this.setState(state => ({
      ...state,
      hidingContainer: this.props.periods[state.currentPerdiod + 2]
        ? utils.formatInterval(this.props.periods[state.currentPerdiod + 2])
        : null,
      currentPerdiod: state.currentPerdiod + 1
    }));
  };

  render() {
    return (
      <View style={styles.base}>
        <Header title="Choose leave type" />
        <View style={styles.headingContainer}>
          <AnimatedHeading
            updateShowingContainer={this.updateShowingContainer}
            nextStep={this.nextStep}
            showingContainer={this.state.showingContainer}
            hidingContainer={this.state.hidingContainer}
            triggerAnimation={this.state.triggerAnimation}
          />
        </View>
        <View style={styles.pickerContainer}>
          <WheelPicker
            selectedItemTextSize={20}
            selectedItemTextFontFamily="Montserrat-Medium"
            itemTextSize={18}
            data={Object.values(this.pickerOptions)}
            selectedItem={this.state.pickerSelectedIndex}
            style={styles.picker}
            onItemSelected={index => this.onPickerChange(index)}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonView}>
            <Button onPress={this.onPressCancel} label="CANCEL" />
          </View>
          <View style={styles.buttonView}>
            <Button onPress={this.onProceedPress} label={this.state.proceedButtonText} />
          </View>
        </View>
      </View>
    );
  }
}
