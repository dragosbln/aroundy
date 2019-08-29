import React from "react";
import { View, Image, ActivityIndicator } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import Text from "../../../../components/Text/BaseText";
import Button from "../../../../components/Buttons/BaseButton";
import TextButton from "../../../../components/Buttons/TextButton";
import { scale, askQuestion } from "../../../../assets/images";
import utils from "../../../../utils/functions";
import colors from '../../../../assets/theme/colors'
import LottieView from 'lottie-react-native'
import {loadingRocket} from '../../../../assets/animations'

export default class CalendarSCREEN extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      sendingRequestIndex: 0,
      sendingDone: false
    }
  } 

  componentDidMount() {
    this.startSendRequests()
  }

  sendRequests = () => {
    this.props.sendRequests();
  }

  onBackPressed = () => {
    utils.resetNavigation(this.props.navigation, 'CalendarScreen')
  }

  onCancelRequests = () => {
    this.props.cancelRequests()
    utils.resetNavigation(this.props.navigation, 'CalendarScreen')
  }

  startSendRequests = () => {
    this.props.createRequest(this.props.periods[0])
  }

  componentDidUpdate = async (prevProps, prevState) => {
    if(prevProps === this.props){
      return
    }
    console.log(prevProps, this.props);
    
    if(!prevProps.createSuccess && this.props.createSuccess){
      await this.setState(state => ({
        ...state,
        sendingRequestIndex: state.sendingRequestIndex + 1
      }))
      
      if(this.state.sendingRequestIndex < this.props.periods.length){
        this.props.createRequest(this.props.periods[this.state.sendingRequestIndex])
      } else {
        this.props.refreshUser()
        await new Promise(res => setTimeout(res, 3000))
        this.setState(state => ({
          ...state,
          sendingDone: true
        }))
      }
    }
  }

  render() {
    let toRender = (
      <>
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

            <Text customStyle={styles.daysTxt}>
              {utils.calculateDaysTotal(this.props.periods)} Days
            </Text>
          </View>
        </View>
        <View style={styles.summaryContainer}>
          <Text customStyle={styles.summaryTxt}>
            You requested{" "}
            {this.props.periods
              .map(period =>
                utils.formatInterval({ from: period.from, to: period.to }, true)
              )
              .join(", ")}{" "}
            off days for Vacation.
          </Text>
        </View>
        <View style={styles.fingersCrossedContainer}>
          <Text customStyle={styles.fingersCrossedText}>Fingers crossed!</Text>
        </View>
        <View style={styles.cancelContainer}>
          <TextButton onPress={this.onCancelRequests} customStyle={styles.cancelTxt}>Cancel request</TextButton>
        </View>
        <View style={styles.buttonView}>
          <Button onPress={this.onBackPressed} label="BACK TO PLANNET EARTH" />
        </View>
      </>
    );

    let headerMessage = `Sending your request${this.props.periods.length > 1 ? 's' : ''}...`
    if(this.state.sendingDone){
      headerMessage='Success'
    }
    if (!this.state.sendingDone) {
      toRender= (
        <View style={styles.animationContainer}>
          <LottieView source={loadingRocket} autoPlay />
        </View>
      )
    }
    if(this.props.error) {
      headerMessage='Error'
      toRender = (
        <View style={styles.contentContainer}>
          <Text>Something went wrong!</Text>
          <Button onPress={this.sendRequests} label='TRY AGAIN' />
        </View>
      )
    }

    return <View style={styles.base}>
        <Header title={headerMessage} />

    {toRender}
    </View>;
  }
}
