import React from "react";
import { View, TextInput } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import Heading from "../../../../components/Text/HeadingText";
import List from './List'
import Button from '../../../../components/Buttons/BaseButton'
import PrimaryButton from '../../../../components/Buttons/PrimaryButton'

export default class CalendarSCREEN extends React.Component {
  render() {
    return (
      <View style={styles.base}>
        <Header title="Send to bosses" />
        <View style={styles.headingContainer}>
          <Heading customStyle={styles.heading}>
            24, 26, 27 - 28 August 2019
          </Heading>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder='Comments'/>
        </View>
        <View style={styles.listContainer}>
           <List />
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.backBtn}>
            <Button label="BACK" />
          </View>
          <View style={styles.setMeFreeBtn}>
            <PrimaryButton label="SET ME FREE" />
          </View>
        </View>
      </View>
    );
  }
}
