import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { Calendar } from "react-native-calendars";
import Header from "../../components/Header";
import Dot from "../../components/Dot";
import Text from '../../components/Text/BaseText'

export default class CalendarSCREEN extends React.Component {
  render() {
    return (
      <View style={styles.base}>
        <Header title="Choose leave type " />
        <View style={{width: '90%'}}>
          <Calendar
            onDayPress={date => console.log(date)}
            markedDates
            // theme={{"stylesheet.calendar.header":{
            //   header: {
            //     flexDirection: 'row',
            //     justifyContent: 'center',

            //   },
            //   monthText: {
            //     width: 100,
            //     fontSize: 20,
            //     textAlign: 'center',

            //   }

            // } }}
          />
          </View>
        
        <View style={styles.legendContainer}>
          <View style={styles.legendSubContainer}>
            <Dot color="#90C418" />
            <Text customStyle={styles.legendText}>Approved</Text>
          </View>
          <View style={styles.legendSubContainer}>
            <Dot color="#F8C822" />
            <Text customStyle={styles.legendText}>Waiting</Text>
          </View>
          <View style={styles.legendSubContainer}>
            <Dot color="#FC4850" />
            <Text customStyle={styles.legendText}>Rejected</Text>
          </View>
        </View>
      </View>
    );
  }
}
