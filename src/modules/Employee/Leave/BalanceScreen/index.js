import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import Heading from "../../../../components/Text/HeadingText";
import Text from "../../../../components/Text/BaseText";
import Button from "../../../../components/Buttons/BaseButton";
import { scale, askQuestion } from "../../../../assets/images";

export default class CalendarSCREEN extends React.Component {
  render() {
    return (
      <View style={styles.base}>
        <Header title="Your Balance" />
        <View style={styles.headingContainer}>
          <Heading customStyle={styles.heading}>
            24,26,27 - 28 August 2019
          </Heading>
        </View>
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
