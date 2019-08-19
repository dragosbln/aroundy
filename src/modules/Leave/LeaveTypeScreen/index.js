import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Header from "../../../components/Header";
import Heading from "../../../components/Text/HeadingText";
import { WheelPicker } from "react-native-wheel-picker-android";
import Button from "../../../components/Buttons/BaseButton";

const wheelPickerData = [
  "FAMILY EMERGENCY",
  "SCICKNESS",
  "VACATION",
  "PARENTAL LEAVE",
  "TRAINING DAY",
  "friday"
];
export default class CalendarSCREEN extends React.Component {
  render() {
    return (
      <View style={styles.base}>
        <Header title="Choose leave type" />
        <View style={styles.headingContainer}>
          <Heading customStyle={styles.heading}>
            24,26,27 - 28 August 2019
          </Heading>
        </View>
        <View style={styles.pickerContainer}>
          <WheelPicker data={wheelPickerData} selectedItem={2} backgroundColor='blue' />
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
