import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import Heading from "../../../../components/Text/HeadingText";
import Button from "../../../../components/Buttons/BaseButton";
import { ScrollView } from "react-native-gesture-handler";
import DaySwitch from "./daySwitch";

export default class CalendarSCREEN extends React.Component {
  render() {
    return (
      <View style={styles.base}>
        <Header title="Choose full/half days" />
        <View style={styles.headingContainer}>
          <Heading customStyle={styles.heading}>
            24,26,27 - 28 August 2019
          </Heading>
        </View>
        <ScrollView style={styles.balanceContainer}>
          <DaySwitch />
          <DaySwitch />
          <DaySwitch />
          <DaySwitch />
        </ScrollView>
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
