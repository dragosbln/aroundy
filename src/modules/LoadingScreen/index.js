import React from "react";
import { ImageBackground, View } from "react-native";
import styles from "./styles";
import { loginBg } from "../../assets/images";
import LottieView from "lottie-react-native";
import { austronaut } from "../../assets/animations";
import decodeJwt from "jwt-decode";

export default class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: ""
    };
  }

  componentDidMount = async () => {
    // await new Promise(res => setTimeout(res, 3000));
    this.props.getCountdownHoliday();
    this.props.getCachedTokens();
  };

  componentDidUpdate = prevProps => {
    if (prevProps === this.props) {
      return;
    }

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
        this.setState(state => ({
          ...state,
          mode: "hr"
        }));
        this.props.getCurrentUser();
        this.props.getHolidays();
        return;
        // return this.props.navigation.navigate("HR");
      }
      if (decoded.roles.includes("project-manager")) {
        this.setState(state => ({
          ...state,
          mode: "pm"
        }));
        this.props.getCurrentUser();
        this.props.getHolidays();
        return;
        // return this.props.navigation.navigate("HR");
      }
      //TODO: PM
      this.setState(state => ({
        ...state,
        mode: "employee"
      }));
      this.props.getCurrentUser();
      this.props.getHolidays();
      return;
      // return this.props.navigation.navigate("Employee");
    }

    if(this.state.mode === 'pm' && this.props.currentUser && !this.props.users){
      //TODO: ask how to get team users, as PM
      this.props.getAllTeamUsers()
    }

    if(this.state.mode === 'hr' && this.props.currentUser && !this.props.users){
      //TODO: ask how to get team users, as PM
      this.props.getAllUsers()
    }

    if (
      (this.state.mode === "hr" || this.state.mode === 'pm') &&
      this.props.currentUser &&
      this.props.users &&
      !this.props.requests &&
      !this.props.getRequestsPending
    ) {
      this.props.getRequests();
    }

    if (
      this.state.mode === "hr" &&
      this.props.currentUser &&
      this.props.users &&
      this.props.requests &&
      this.props.holidays
    ) {
      return this.props.navigation.navigate("HR");
    }
    if (
      this.state.mode === "pm" &&
      this.props.currentUser &&
      this.props.users &&
      this.props.requests &&
      this.props.holidays
    ) {
      console.log('LOGED AS PM, PROMISE!');
      
      return this.props.navigation.navigate("PM");
    }
    if (
      this.state.mode === "employee" &&
      this.props.currentUser &&
      this.props.holidays
    ) {
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
