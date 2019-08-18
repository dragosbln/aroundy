import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import Header from "../../../components/Header";
import Button from "../../../components/Buttons/BaseButton";
import { dracu } from "../../../assets/images";
import Calendar from './Calendar'
//TODO: get legend from components
import Legend from './Legend'

export default class CalendarSCREEN extends React.Component {
  render() {
    return (
      <View style={styles.base}>
        <Header title="Fly away" />
        <View style={styles.calendarContainer}>
          <View style={styles.dracuContainer}>
            <Image source={dracu} style={styles.dracu} />
          </View>
          <Calendar />
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonView}>
            <Button label="CANCEL" />
          </View>
          <View style={styles.buttonView}>
            <Button label="PROCEED" />
          </View>
        </View>

        <View style={styles.legendContainer}>
        
          <Legend />
        </View>
      </View>
    );
  }
}
