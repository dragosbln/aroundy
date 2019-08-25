import React from "react";
import { ImageBackground, View } from "react-native";
import styles from "./styles";
import { loginBg } from "../../assets/images";
import LottieView from "lottie-react-native";
import { austronaut } from "../../assets/animations";
import decodeJwt from "jwt-decode";

export default class LoadingScreen extends React.Component {
  componentDidMount = async () => {
    
    // await new Promise(res => setTimeout(res, 3000))
    this.props.getCountdownHoliday();
    this.props.getCachedTokens()
  };

  componentDidUpdate = prevProps => {

    if (prevProps.countdownHoliday !== this.props.countdownHoliday) {
      this.props.setCountdownHoliday(this.props.countdownHoliday);
    }
    if (prevProps.tokens !== this.props.tokens) {
      if (!this.props.tokens.refresh_token) {
        return this.props.navigation.navigate("Login");
      }
      if (!this.props.tokens.access_token) {
        //TODO: handle refreshing token
        return this.props.navigation.navigate("Login");
      }
      this.props.setTokens(this.props.tokens);
      const decoded = decodeJwt(this.props.tokens.access_token);
      if (decoded.roles.includes("human-resources")) {
        return this.props.navigation.navigate("HR");
      }
      //TODO: PM
      return this.props.navigation.navigate("Employee");
    }
  };

  render() {

    return (
      <ImageBackground source={loginBg} style={styles.base}>
        <View style={styles.contentContainer}>
          <LottieView source={austronaut} autoPlay loop />
        </View>
      </ImageBackground>
    );
  }
}
