import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import Text from "../../../../components/Text/BaseText";
import Button from "../../../../components/Buttons/BaseButton";
import TextButton from "../../../../components/Buttons/TextButton";
import { scale, askQuestion } from "../../../../assets/images";

export default class CalendarSCREEN extends React.Component {
  render() {
    return (
      <View style={styles.base}>
        <Header title="Success" />
        <View style={styles.balanceContainer}>
          <View style={styles.row}>
            <View style={styles.rowName}>
              <Image source={scale} style={styles.rowNameIcon} />
              <Text customStyle={styles.rowNameTxt}>Balance</Text>
            </View>

            <Text customStyle={styles.daysTxt}>3.5 Days</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.rowName}>
              <Image source={askQuestion} style={styles.rowNameIcon} />
              <Text customStyle={styles.rowNameTxt}>Requested</Text>
            </View>

            <Text customStyle={styles.daysTxt}>4 Days</Text>
          </View>
        </View>
        <View style={styles.summaryContainer}>
          <Text customStyle={styles.summaryTxt}>You requested 24 - 28 Aug off days for Vacation.</Text>
        </View>
        <View style={styles.fingersCrossedContainer}>
          <Text customStyle={styles.fingersCrossedText}>Fingers crossed!</Text>
        </View>
        <View style={styles.cancelContainer}>
          <TextButton customStyle={styles.cancelTxt}>Cancel request</TextButton>
        </View>
        <View style={styles.buttonView}>
          <Button label="BACK TO PLANNET EARTH" />
        </View>
      </View>
    );
  }
}
