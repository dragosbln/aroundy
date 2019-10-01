import React from "react";
import { ImageBackground, View, Linking, Alert } from "react-native";
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

  // componentDidMount = async () => {
  //   // await new Promise(res => setTimeout(res, 3000));
  //   this.props.getCountdownHoliday();
  //   this.props.getCachedTokens();
  // };
  async componentDidMount() {
    const initialURL = await Linking.getInitialURL();

    Linking.addEventListener("url", this.handleOpenURL);
    if (initialURL) {
      this.props.setPasswordToken(initialURL.split('token=')[1])
    } else {
      this.props.getCountdownHoliday();
      this.props.getCachedTokens();
    }
  }

  componentWillUnmount() {
    Linking.removeEventListener("url", this.handleOpenURL);
  }
  handleOpenURL = event => {
    this.props.setPasswordToken(event.url.split('token=')[1])
  };

  componentDidUpdate = prevProps => {
    if (prevProps === this.props) {
      return;
    }

    if(!prevProps.passwordToken && this.props.passwordToken){
      this.props.navigation.navigate("SetPassword");
    }

    if (prevProps.countdownHoliday !== this.props.countdownHoliday) {
      this.props.setCountdownHoliday(this.props.countdownHoliday);
    }
    if (prevProps.cacheTokens !== this.props.cacheTokens) {
      if (!this.props.cacheTokens.refresh_token) {
        return this.props.navigation.navigate("Login");
      }
      if (!this.props.cacheTokens.access_token) {
        //TODO: handle refreshing token
        return this.props.navigation.navigate("Login");
      }
      this.props.setTokens(this.props.cacheTokens);
      this.props.getHolidays();
      const decoded = decodeJwt(this.props.cacheTokens.access_token);
      if (decoded.roles.includes("human-resources")) {
        this.setState(state => ({
          ...state,
          mode: "hr"
        }));

        return;
      }
      if (decoded.roles.includes("project-manager")) {
        this.setState(state => ({
          ...state,
          mode: "pm"
        }));
        return;
      }
      this.setState(state => ({
        ...state,
        mode: "employee"
      }));
      return;
    }

    if (prevProps.authTokens !== this.props.authTokens) {
      this.props.getCurrentUser();
      this.props.getManagers();
    }

    if (
      (this.state.mode === "hr" || this.state.mode === "pm") &&
      this.props.currentUser &&
      !this.props.users
    ) {
      this.props.getTeamMembers();
    }

    if (
      (this.state.mode === "hr" || this.state.mode === "pm") &&
      this.props.authTokens &&
      !this.props.allRequests
    ) {
      this.props.getAllRequests();
    }

    if (this.props.currentUser && this.props.holidays && this.props.managers) {
      if (
        this.state.mode === "hr" &&
        this.props.users &&
        this.props.allRequests
      ) {
        return this.props.navigation.navigate("HR");
      }
      if (
        this.state.mode === "pm" &&
        this.props.users &&
        this.props.allRequests
      ) {
        return this.props.navigation.navigate("PM");
      }
      if (this.state.mode === "employee") {
        return this.props.navigation.navigate("Employee");
      }
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
