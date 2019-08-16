import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Header from "../../../components/Header";
import { profileBg, profilePic } from "../../../assets/images";
import CircularImage from "../../../components/CircularImage";
import Text from "../../../components/Text/BaseText";
import TextButton from "../../../components/Buttons/TextButton";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import Counter from "../../../components/Counter";
import Main from './Main'

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.base}>
        <Header
          title="Darius Cupsa"
          bg={profileBg}
          customStyle={styles.header}
          textContainerStyle={styles.textContainerStyle}
        />
        <View style={styles.profilePicContainer}>
          <CircularImage source={profilePic} />
        </View>
        <View style={styles.summaryContainer}>
          <Text customStyle={styles.summaryTxt}>
            Your request for 24 - 28 Aug has been approved.
          </Text>
        </View>
        <View style={styles.cancelContainer}>
          <TextButton customStyle={styles.cancelTxt}>Cancel request</TextButton>
        </View>
        <View style={styles.counterContainer}>
          <Counter
            counter="2w 4d 38m 47s"
            until="Vacation Day"
            counterStyle={styles.counterStyle}
            footerStyle={styles.footerStyle}
          />
        </View>
        <View style={styles.setMeFreeBtn}>
          <PrimaryButton label="REQUEST A DAY OFF" />
        </View>
        <View style={styles.mainContainer}>
          <Main />
        </View>
      </View>
    );
  }
}
