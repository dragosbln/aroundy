import React from "react";
import { View, Dimensions } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import Heading from "../../../../components/Text/HeadingText";
import { WheelPicker } from "react-native-wheel-picker-android";
import Button from "../../../../components/Buttons/BaseButton";
import appData from "../../../../utils/appData";
import utils from "../../../../utils";
import Animated from "react-native-reanimated";

export default class CalendarSCREEN extends React.Component {
  constructor(props) {
    super(props);
    this.screenWidth = Dimensions.get("window").width;

    this.state = {
      currentPerdiod: 0,
      animations: {
        showingContainer: new Animated.Value(this.screenWidth/10),
        hidingContainer: new Animated.Value(2 * this.screenWidth)
      }
    };
  }

  // switchHeadings = () => {
  //   Animated.timing()
  // }

  render() {
    return (
      <View style={styles.base}>
        <Header title="Choose leave type" />
        <View style={styles.headingContainer}>
          <Animated.View
            style={[
              styles.headingRunningContainer,
              {
                right: this.state.animations.showingContainer,
              }
            ]}>
            <Heading customStyle={styles.heading}>24,26,27 - 28 August 2019</Heading>
          </Animated.View>
          <Animated.View
            style={[
              styles.headingRunningContainer,
              {
                right: this.state.animations.hidingContainer,
              }
            ]}>
            <Heading customStyle={styles.heading}>24,26,27 - 28 August 2019</Heading>
          </Animated.View>
        </View>
        <View style={styles.pickerContainer}>
          <WheelPicker
            selectedItemTextSize={20}
            selectedItemTextFontFamily="Montserrat-Medium"
            itemTextSize={18}
            data={Object.values(appData.leaveTypes)}
            selectedItem={2}
            hideIndicator
          />
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonView}>
            <Button label="CANCEL" />
          </View>
          <View style={styles.buttonView}>
            <Button label="PROCEED" />
          </View>
        </View>
      </View>
    );
  }
}
