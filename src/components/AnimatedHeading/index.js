import React from "react";
import { Animated, View, Dimensions } from "react-native";
import styles from "./styles";
import Heading from "../Text/HeadingText";

export default class AnimatedHeading extends React.Component {
  constructor(props) {
    super(props);
    this.screenWidth = Dimensions.get("window").width;
    this.state = {
      showingContainerRight: new Animated.Value(this.screenWidth / 10),
      hidingContainerRight: new Animated.Value(2 * this.screenWidth)
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.triggerAnimation !== this.props.triggerAnimation) {
      this.switchHeadings();
    }
  };

  

  switchHeadings = () => {
    Animated.parallel([
      Animated.timing(this.state.hidingContainerRight, {
        toValue: this.screenWidth / 10,
        duration: 500
      }),
      Animated.timing(this.state.showingContainerRight, {
        toValue: -this.screenWidth,
        duration: 500
      })
    ]).start(async () => {
      console.log("before update:", this.props.showingContainer);
       this.props.updateShowingContainer();
      console.log("after update:", this.props.showingContainer);

      Animated.parallel([
        Animated.timing(this.state.hidingContainerRight, {
          toValue: 2 * this.screenWidth,
          duration: 0
        }),
        Animated.timing(this.state.showingContainerRight, {
          toValue: this.screenWidth / 10,
          duration: 0
        })
      ]).start();
      this.props.nextStep();
    });
  };

  render() {
    return (
      <View style={styles.base}>
        <Animated.View
          style={[
            styles.headingRunningContainer,
            {
              right: this.state.showingContainerRight
            }
          ]}
        >
          <Heading customStyle={styles.heading}>
            {this.props.showingContainer}
          </Heading>
        </Animated.View>
        <Animated.View
          style={[
            styles.headingRunningContainer,
            {
              right: this.state.hidingContainerRight
            }
          ]}
        >
          <Heading customStyle={styles.heading}>
            {this.props.hidingContainer}
          </Heading>
        </Animated.View>
      </View>
    );
  }
}
