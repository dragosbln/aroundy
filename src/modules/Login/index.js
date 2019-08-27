import React from "react";
import { ImageBackground, View, ActivityIndicator } from "react-native";
import { loginBg } from "../../assets/images";
import styles from "./styles";
import Input from "../../components/Input";
import TextButton from "../../components/Buttons/TextButton";
import Button from "../../components/Buttons/PrimaryButton";
import { passwordIcon, emailIcon } from "../../assets/images";
import Text from "../../components/Text/BaseText";
import decodeJwt from "jwt-decode";
import responseTypes from "../../utils/responseTypes";
import colors from "../../assets/theme/colors";
import utils from '../../utils/functions'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formConfig: {
        email: {
          value: "",
          placeholder: "Email",
          icon: emailIcon,
          valid: false,
          touched: false,
          validation: {
            required: true,
            email: true
          }
        },
        password: {
          value: "",
          placeholder: "Password",
          icon: passwordIcon,
          valid: false,
          touched: false,
          validation: {
            required: true
          }
        }
      },
    };
  }

  componentDidMount() {
    this.props.getCountdownHoliday();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps === this.props) {
      return;
    }

    if (prevProps.countdownHoliday !== this.props.countdownHoliday) {
      this.props.setCountdownHoliday(this.props.countdownHoliday);
    }

    if (prevProps.tokens !== this.props.tokens) {
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
  }

  // checkInput = (key, value) => {
  //   let valid = true;
  //   const elememntConfig = this.state.formConfig[key];
  //   if (elememntConfig.validation.required) {
  //     valid = valid && value !== "";
  //   }
  //   if (elememntConfig.validation.email) {
  //     valid =
  //       valid && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
  //   }

  //   return valid; 
  // };

  // checkForm = () => {
  //   const formConfig = this.state.formConfig;
  //   let validForm = true;
  //   for (let key in formConfig) {
  //     if (!formConfig[key].valid) {
  //       validForm = false;
  //     }
  //   }
  //   return validForm;
  // };

  onTextChanged = key => async value => {
    await this.setState(state => ({
      ...state,
      formConfig: {
        ...state.formConfig,
        [key]: {
          ...state.formConfig[key],
          value: value,
          touched: true,
          valid: utils.checkInput(this.state.formConfig, key, value)
        }
      }
    }));
  };

  onSubmit = async () => {
    const formConfig = {...this.state.formConfig}
    for(let key in formConfig){
      formConfig[key] = {
        ...this.state.formConfig[key],
        touched: true
      }
    }
    await this.setState(state => ({
      ...state,
      formConfig
    }));
    if (!utils.checkForm(this.state.formConfig)) {
      return;
    }
    // this.props.login(
    //   this.state.formConfig.email.value,
    //   this.state.formConfig.password.value
    // );
    this.props.login('admin@aroundy.com', 'secret')
  };

  render() {
    const formConfig = this.state.formConfig;
    const form = Object.keys(formConfig).map((key, index) => (
      <View key={index} style={styles.input}>
        <Input
          onChangeText={this.onTextChanged(key)}
          value={formConfig[key].value}
          gradientColors = {["#FAD961", "#E77A39"]}
          placeholder={formConfig[key].placeholder}
          icon={formConfig[key].icon}
          valid={formConfig[key].valid || !formConfig[key].touched}
        />
      </View>
    ));
    let status = null;
    if (this.props.pending) {
      status = <ActivityIndicator size="small" color={colors.orange} />;
    }
    if (
      this.props.error &&
      this.props.error.type === responseTypes.UNAUTHORIZED
    ) {
      status = (
        <Text customStyle={styles.errorTxt}>Invalid user/password!</Text>
      );
    }
    if (this.props.error && this.props.error.type === responseTypes.TIMEOUT) {
      status = (
        <Text customStyle={styles.errorTxt}>
          Server didn't respond. Check your internet connection!
        </Text>
      );
    }
    return (
      <ImageBackground source={loginBg} style={styles.base}>
        <View style={styles.logoContainer}>
          <Text>logo</Text>
        </View>
        <View style={styles.statusContainer}>{status}</View>
        <View style={styles.inputsContainer}>
          {form}
          <View style={styles.textBtn}>
            <TextButton customStyle={styles.textBtnTxt}>
              forgot pass?
            </TextButton>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Button label="LOGIN" onPress={this.onSubmit} />
        </View>
      </ImageBackground>
    );
  }
}
