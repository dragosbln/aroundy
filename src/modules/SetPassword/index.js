import React from "react";
import {
  ImageBackground,
  View,
  ActivityIndicator,
  Alert
} from "react-native";
import { loginBg } from "../../assets/images";
import styles from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Buttons/PrimaryButton";
import { passwordIcon } from "../../assets/images";
import Text from "../../components/Text/BaseText";
import responseTypes from "../../utils/responseTypes";
import colors from "../../assets/theme/colors";
import utils from "../../utils/functions";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formConfig: {
        password: {
          value: "",
          placeholder: "Password",
          icon: passwordIcon,
          valid: false,
          touched: false,
          validation: {
            required: true,
          }
        },
        passwordConfirm: {
          value: "",
          placeholder: "Confirm Password",
          icon: passwordIcon,
          valid: false,
          touched: false,
          validation: {
            required: true
          }
        }
      },
      triedSubmit: false,
      passwordsNotMatching: false
    };
  }

  

  componentDidUpdate = (prevProps) => {
    if(!prevProps.success && this.props.success){
      this.props.navigation.navigate({routeName: 'Login'})
    }
  }

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
      },
      passwordsNotMatching: false
    }));
  };

  onSubmit = async () => {
    const formConfig = { ...this.state.formConfig };
    for (let key in formConfig) {
      formConfig[key] = {
        ...this.state.formConfig[key],
        touched: true
      };
    }
    await this.setState(state => ({
      ...state,
      formConfig,
      triedSubmit: true
    }));
    if (!utils.checkForm(this.state.formConfig)) {
      return;
    }

    if(this.state.formConfig.password.value !== this.state.formConfig.passwordConfirm.value){
      return this.setState(state => ({
        ...state,
        passwordsNotMatching: true
      }))
    }

    this.props.setPassword(this.state.formConfig.password.value)
    // this.props.login(
    //   this.state.formConfig.email.value,
    //   this.state.formConfig.password.value
    // );
    // this.props.login('admin@aroundy.com', 'secret')

  };

  renderForm() {
    const formConfig = this.state.formConfig;
    return Object.keys(formConfig)
      .sort()
      .map((key, index) => (
        <View key={index} style={styles.input}>
          <Input
            onChangeText={this.onTextChanged(key)}
            value={formConfig[key].value}
            gradientColors={["#FAD961", "#E77A39"]}
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
  }

  render() {
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
    if (this.state.passwordsNotMatching) {
      status = (
        <Text customStyle={styles.errorTxt}>
          Passwords are not matching!
        </Text>
      );
    }
    return (
      <ImageBackground source={loginBg} style={styles.base}>
        <View style={styles.statusContainer}>{status}</View>
        <View style={styles.inputsContainer}>{this.renderForm()}</View>
        <View style={styles.btnContainer}>
          <Button label="SET PASSWORD" onPress={this.onSubmit} />
        </View>
      </ImageBackground>
    );
  }
}
