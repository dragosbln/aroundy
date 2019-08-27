import React from "react";
import { View, Image, ScrollView } from "react-native";
import styles from "./styles";
import Text from "../../../../components/Text/BaseText";
import Header from "../../../../components/Header";
import { profileBg, profilePic, scale } from "../../../../assets/images";
import PrimaryButton from "../../../../components/Buttons/PrimaryButton";
import Button from "../../../../components/Buttons/BaseButton";

const dummy = {
  date: "30 - 31 February 2019",
  type: "Vacation",
  status: "Pending",
  days: 2,
  sentTo: "Cristina Ilieș, Florina Vasile, Paul Chirilă, Adrian Boroș",
  comm: "I'm driving my sister to college on Monday and Tuesday."
};

export default class HistoryDetailsScreen extends React.Component {
  render() {
    return (
      <View style={styles.base}>
        <Header bg={profileBg} picture={profilePic} title="Ann Andria Report" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContainer}
          style={styles.scrollContainer}
        >
          <View style={styles.rowsContainer}>
            {Object.keys(dummy).map(key => (
              <View style={styles.row}>
                <View style={styles.rowNameConainer}>
                  <Text customStyle={styles.rowNameTxt}>{`${key
                    .charAt(0)
                    .toUpperCase()}${key.slice(1, key.length)}`}</Text>
                </View>
                <View style={styles.rowContentContainer}>
                  <Text customStyle={styles.rowContentTxt}>{dummy[key]}</Text>
                </View>
              </View>
            ))}
          </View>
          <View style={styles.balanceContianer}>
            <View style={styles.balanceName}>
              <Image source={scale} style={styles.balanceNameIcon} />
              <Text customStyle={styles.balanceNameTxt}>Balance</Text>
            </View>

            <Text customStyle={styles.balanceDaysTxt}>3.5 Days</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonView}>
              <PrimaryButton label="BOOK A DAY" />
            </View>
            <View style={styles.buttonView}>
              <Button label="DOWNLOAD" />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
