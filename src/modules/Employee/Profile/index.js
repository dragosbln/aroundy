import React from "react";
import { View, Animated, PanResponder, Dimensions } from "react-native";
import styles from "./styles";
import Header from "../../../components/Header";
import { profileBg, profilePic } from "../../../assets/images";
import CircularImage from "../../../components/CircularImage";
import Text from "../../../components/Text/BaseText";
import TextButton from "../../../components/Buttons/TextButton";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import Counter from "../../../components/Counter";
import Main from "./Main";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.screen = {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height
    };
    this.state = {
      cardTop: 0.7 * this.screen.height,
      moveTop: new Animated.Value(0),
      dragging: false
    };
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => {
        return true
      },
      onPanResponderMove: Animated.event([
        null,
        {
          dy: this.state.moveTop
        }
      ]),
      onPanResponderRelease: (e, gestureState) => {
        //VAR 1 
        this.setState({cardTop: this.state.cardTop+gestureState.dy})
        this.state.moveTop.setValue(0)
        
        // //VAR 2
        // const moveTop = new Animated.Value(0)
        // this.setState({cardTop: this.state.cardTop+gestureState.dy, moveTop: moveTop})
        // this.panResponder.panHandlers.onPanResponderMove = () => console.log('AAA')
      }
    })
  }


  render() {
    return (
      <View style={styles.base}>
        <Header
          title="Darius Cupsa"
          bg={profileBg}
          customStyle={styles.header}
          textContainerStyle={styles.textContainerStyle}
          textStyle={styles.headerTextStyle}
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
        <Animated.View
          
          style={[
            styles.mainContainer,
            {
              top: Animated.add(this.state.cardTop, this.state.moveTop) 
            }
          ]}
        >
          <Main panHandlers={this.panResponder.panHandlers} />
        </Animated.View>
      </View>
    );
  }
}
