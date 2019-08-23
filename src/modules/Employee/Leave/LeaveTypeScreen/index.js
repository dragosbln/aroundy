import React from "react";
import { View, Dimensions, Animated } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import Heading from "../../../../components/Text/HeadingText";
import { WheelPicker } from "react-native-wheel-picker-android";
import Button from "../../../../components/Buttons/BaseButton";
import appData from "../../../../utils/appData";
import utils from "../../../../utils";

export default class CalendarSCREEN extends React.Component {
  constructor(props) {
    super(props);
    this.screenWidth = Dimensions.get("window").width;
    this.pickerOptions = appData.leaveTypes;
    this.state = {
      currentPerdiod: 0,
      animations: {
        showingContainer: new Animated.Value(this.screenWidth / 10),
        hidingContainer: new Animated.Value(2 * this.screenWidth)
      },
      showingContainer: "",
      hidingContainer: "",
      pickerSelectedIndex: 5
    };
  }

  componentDidMount = () => {
    
    this.setState(state => ({
      ...state,
      showingContainer: utils.formatInterval(this.props.periods[0]),
      hidingContainer: this.props.periods[1]
        ? utils.formatInterval(this.props.periods[1])
        : null
    }));
  };

  nextScreen = () => {
    const singleDayHolidays = this.props.periods.filter(period => period.from === period.to)
    if(singleDayHolidays.length > 0){
      return this.props.navigation.navigate('HalfDaysScreen')
    }
    return this.props.navigation.navigate('BalanceScreen')
  }

  onProceedPress = () => {
    this.props.setType(
      this.props.periods[this.state.currentPerdiod].id,
      Object.keys(this.pickerOptions)[this.state.pickerSelectedIndex]
    );
    if (this.state.currentPerdiod >= this.props.periods.length - 1) {
      return this.nextScreen()
    }
    this.switchHeadings();
    this.setState(state => ({
      ...state,
      pickerSelectedIndex: 5
    }));
  };

  switchHeadings = () => {
    Animated.parallel([
      Animated.timing(this.state.animations.hidingContainer, {
        toValue: this.screenWidth / 10,
        duration: 500
      }),
      Animated.timing(this.state.animations.showingContainer, {
        toValue: -this.screenWidth,
        duration: 500
      })
    ]).start(async () => {
      await this.setState(state => ({
        ...state,
        showingContainer: state.hidingContainer
      }));
      Animated.parallel([
        Animated.timing(this.state.animations.hidingContainer, {
          toValue: 2 * this.screenWidth,
          duration: 0
        }),
        Animated.timing(this.state.animations.showingContainer, {
          toValue: this.screenWidth / 10,
          duration: 0
        })
      ]).start();
      console.log(
        "perieds + 2 = ",
        this.props.periods[this.state.currentPerdiod + 2]
      );

      this.setState(state => ({
        ...state,
        hidingContainer: this.props.periods[state.currentPerdiod + 2]
          ? utils.formatInterval(this.props.periods[state.currentPerdiod + 2])
          : null,
        currentPerdiod: state.currentPerdiod + 1
      }));
    });
  };

  onPickerChange = index => {
    this.setState(
      (state = {
        ...this.state,
        pickerSelectedIndex: index
      })
    );
  };

  render() {
    return (
      <View style={styles.base}>
        <Header title="Choose leave type" />
        <View style={styles.headingContainer}>
          <Animated.View
            style={[
              styles.headingRunningContainer,
              {
                right: this.state.animations.showingContainer
              }
            ]}>
            <Heading customStyle={styles.heading}>
              {this.state.showingContainer}
            </Heading>
          </Animated.View>
          <Animated.View
            style={[
              styles.headingRunningContainer,
              {
                right: this.state.animations.hidingContainer
              }
            ]}>
            <Heading customStyle={styles.heading}>
              {this.state.hidingContainer}
            </Heading>
          </Animated.View>
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
            <Button label="CANCEL" />
          </View>
          <View style={styles.buttonView}>
            <Button onPress={this.onProceedPress} label="PROCEED" />
          </View>
        </View>
      </View>
    );
  }
}
