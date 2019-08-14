import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { Calendar, LocaleConfig } from "react-native-calendars";
import Header from "../../components/Header";
import Dot from "../../components/Dot";
import Text from '../../components/Text/BaseText'

LocaleConfig.locales['custom'] = {
  ...LocaleConfig.locales[''],
  dayNamesShort: ['S','M','T','W','T','F','S']
}

LocaleConfig.defaultLocale = 'custom'


export default class CalendarSCREEN extends React.Component {
  render() {
    return (
      <View style={styles.base}>
        <Header title="Choose leave type " />
        <View style={{width: '90%'}}>
          <Calendar
            onDayPress={date => console.log(date)}
            monthFormat='MMMM'
            theme={{"stylesheet.calendar.header":{
              header: {
                flexDirection: 'row',
                justifyContent: 'center',

              },
              monthText: {
                width: 100,
                fontSize: 18,
                textAlign: 'center',
                marginTop: 5,
                color: '#646464'

              },
              dayHeader: {
                color: '#E77A39',
                fontSize: 18,
                fontFamily: 'Montserrat'
              }

            },
          arrowColor: '#646464' }}
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
