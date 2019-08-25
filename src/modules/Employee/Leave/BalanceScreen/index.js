import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import Heading from "../../../../components/Text/HeadingText";
import Text from "../../../../components/Text/BaseText";
import Button from "../../../../components/Buttons/BaseButton";
import { scale, askQuestion } from "../../../../assets/images";
import utils from '../../../../utils/functions'

export default class CalendarSCREEN extends React.Component {

  componentDidMount(){
    
  }

  onProceedPress = () => {
    this.props.navigation.navigate('NotifyBossesScreen')
  }

  onPressCancel = () => {
    this.props.clear()
    utils.resetNavigation(this.props.navigation, 'CalendarScreen')
  }

  render() {
    return (
      <View style={styles.base}>
        <Header title="Your Balance" />
        <View style={styles.headingContainer}>
          <Heading customStyle={styles.heading}>
            {utils.formatInterval({
              from: this.props.periods[0].from,
              to: this.props.periods[this.props.periods.length - 1].to
            })}
          </Heading>
        </View>
        <View style={styles.balanceContainer}>
          <View style={styles.row}>
            <View style={styles.rowName}>
              <Image source={scale} style={styles.rowNameIcon} />
              <Text customStyle={styles.rowNameTxt}>Balance</Text>
            </View>

            <Text customStyle={styles.daysTxt}>{this.props.balance} Days</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.rowName}>
              <Image source={askQuestion} style={styles.rowNameIcon} />
              <Text customStyle={styles.rowNameTxt}>Requested</Text>
            </View>

            <Text customStyle={styles.daysTxt}>{utils.calculateDaysTotal(this.props.periods)} Days</Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonView}>
            <Button onPress={this.onPressCancel} label="CANCEL" />
          </View>
          <View style={styles.buttonView}>
            <Button onPress={this.onProceedPress} label="PROCEED" />
          </View>
        </View>
      </View>
    );
  }
}
