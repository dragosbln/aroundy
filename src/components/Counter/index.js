import React from "react";
import { View } from "react-native";
import styles from "./styles";
import HeadingText from "../Text/HeadingText";
import Text from "../Text/BaseText";
import moment from 'moment'

export default class Counter extends React.Component {

  constructor(props){
    super(props)
    this.state={
      counter: '',
      currentInterval: null
    }
  }

  resetInterval = () => {
    clearInterval(this.state.currentInterval)
    const newInterval = setInterval(() => {
      const currentTime = moment().valueOf();
      const holidayTime = moment(this.props.toDate);
      const duration = moment.duration(holidayTime - currentTime);
      const counter = `${
        duration.months() > 0 ? `${duration.months()}m` : ""
      } ${duration.weeks() > 0 ? `${duration.weeks()}w` : ""} ${
        duration.days() > 0 ? `${duration.days()}d` : ""
      } ${duration.hours() > 0 ? `${duration.hours()}h` : ""} ${
        duration.minutes() > 0 ? `${duration.minutes()}m` : ""
      } ${duration.seconds() > 0 ? `${duration.seconds()}s` : ""}`;
      this.setState(state =>({
        ...state,
        counter
      }))
    }, 1000);
    this.setState(state => ({
      ...state,
      currentInterval: newInterval
    }))
  }

  componentDidMount = () => {
    this.resetInterval()
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevProps.toDate !== this.props.toDate){
      this.resetInterval()
    }
  }

  render(){
    return (
      <View style={styles.base}>
        <HeadingText
          customStyle={{ ...styles.counterHeading, ...this.props.counterStyle }}
        >
          {this.state.counter}
        </HeadingText>
        <Text customStyle={{...styles.counterFooter, ...this.props.footerStyle}}>until {this.props.name}</Text>
      </View>
    );
  }
  

 
};
