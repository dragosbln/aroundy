import React from "react";
import { View, Linking } from "react-native";

export default class MyLinking extends React.Component {
  componentDidMount() {
    // B
    console.log("mount!!");

    // if (Platform.OS === "android") {
    //   Linking.getInitialURL().then(url => {
    //     console.log("YAOOOOO", url);
    //   });
    // } else {
      Linking.addEventListener("url", this.handleOpenURL);
    // }
  }

  componentWillUnmount() {
    // C
    Linking.removeEventListener("url", this.handleOpenURL);
  }

  handleOpenURL(event) {
    // D
    console.log("YAOOOOO", event);
  }

  render() {
    return <View />;
  }
}
