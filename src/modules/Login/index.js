import React from "react";
import { ImageBackground, View, ActivityIndicator } from "react-native";
import { loginBg } from "../../assets/images";
import styles from "./styles";
import Input from "../../components/Input";
import TextButton from "../../components/Buttons/TextButton";
import Button from "../../components/Buttons/PrimaryButton";
import { passwordIcon, emailIcon } from "../../assets/images";
import Text from "../../components/Text/BaseText";
import jwtDecode from "jwt-decode";
import responseTypes from "../../utils/responseTypes";
import colors from '../../assets/theme/colors'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formConfig: {
        email: {
          value: "",
          placeholder: "Email",
          icon: emailIcon,
          valid: true,
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
          valid: true,
          touched: false,
          validation: {
            required: true
          }
        }
      },
      triedSubmit: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.token || this.props.error) {
      return;
    }

    const decoded = jwtDecode(this.props.token);

    if (decoded.roles.includes("human-resources")) {
      return this.props.navigation.navigate("HR");
    }
    //TODO: PM
    return this.props.navigation.navigate("Employee");
  }

  checkInput = (key, value) => {
    let valid = true;
    const elememntConfig = this.state.formConfig[key];
    if (elememntConfig.validation.required) {
      valid = valid && value !== "";
    }
    if (elememntConfig.validation.email) {
      valid =
        valid && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    }

    return valid;
  };

  checkForm = () => {
    const formConfig = this.state.formConfig;
    let validForm = true;
    for (let key in formConfig) {
      if (!formConfig[key].valid) {
        validForm = false;
      }
    }
    return validForm;
  };

  onTextChanged = key => async value => {
    await this.setState(state => ({
      ...state,
      formConfig: {
        ...state.formConfig,
        [key]: {
          ...state.formConfig[key],
          value: value,
          touched: true,
          valid: this.checkInput(key, value)
        }
      }
    }));
  };

  onSubmit = async () => {
    if (!this.state.triedSubmit) {
      await this.setState(state => ({
        ...state,
        triedSubmit: true
      }));
    }
    if (!this.checkForm()) {
      return;
    }
    this.props.login(
      this.state.formConfig.email.value,
      this.state.formConfig.password.value
    );
  };

  render() {
    const formConfig = this.state.formConfig;
    const form = Object.keys(formConfig).map((key, index) => (
      <View key={index} style={styles.input}>
        <Input
          onChangeText={this.onTextChanged(key)}
          value={formConfig[key].value}
          gradient
          placeholder={formConfig[key].placeholder}
          icon={formConfig[key].icon}
          valid={
            this.state.triedSubmit
              ? formConfig[key].valid || !formConfig[key].touched
              : true
          }
        />
      </View>
    ));
    let status = null;
    if(this.props.pending){
      status = <ActivityIndicator size='small' color={colors.orange} />
    }
    if (this.props.error && this.props.error.type === responseTypes.UNAUTHORIZED) {
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
        <View style={styles.statusContainer}>
          {status}
        </View>
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
