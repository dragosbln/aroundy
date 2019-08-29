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
            email: true
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
      triedSubmit: false
    };
  }

  // componentDidMount() {
  //   this.props.getCountdownHoliday();
  // }

  componentDidMount() {
    Alert.alert('propssiees', this.props.passwordToken)
  }

  // componentWillUnmount() {
  //   Linking.removeEventListener("url", this.handleOpenURL);
  // }
  // handleOpenURL = event => {
  //   console.log("YAOOOOO", event);
  // };

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (prevProps === this.props) {
  //     return;
  //   }
  // };

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

  componentDidUpdate = (prevProps) => {
    if(!prevProps.setPasswordSuccess && this.props.setPasswordSuccess){
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
      }
    }));
  };

  onSubmit = async () => {
    // const formConfig = { ...this.state.formConfig };
    // for (let key in formConfig) {
    //   formConfig[key] = {
    //     ...this.state.formConfig[key],
    //     touched: true
    //   };
    // }
    // await this.setState(state => ({
    //   ...state,
    //   formConfig,
    //   triedSubmit: true
    // }));
    // if (!utils.checkForm(this.state.formConfig)) {
    //   return;
    // }
    //FIXME: check password matching
    this.props.setPassword('secret')
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
