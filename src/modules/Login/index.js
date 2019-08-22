import React from "react";
import { ImageBackground, View } from "react-native";
import { loginBg } from "../../assets/images";
import styles from "./styles";
import Input from "../../components/Input";
import TextButton from "../../components/Buttons/TextButton";
import Button from "../../components/Buttons/PrimaryButton";
import { passwordIcon, emailIcon } from "../../assets/images";
import Text from '../../components/Text/BaseText'

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
    
    if(prevProps === this.props) return

    console.log('got in update');
    
    if(this.props.error){
      console.log('====================================');
      console.log(this.props.error);
      console.log('====================================');
    }
    if (!this.props.user) {
      return
    }
    if (!this.props.user.Roles) {
      return
    }
    if (this.props.user.Roles.find(el => el.name === "human-resources")) {
      return this.props.navigation.navigate("HR");
    }
    if (this.props.user.Roles.find(el => el.name === "employee")) {
      return this.props.navigation.navigate("Employee");
    }
  }

  checkInput = (key, value) => {
    let valid = true;
    const elememntConfig = this.state.formConfig[key];
    if (elememntConfig.validation.required) {
      valid = valid && value !== "";
    }
    if(elememntConfig.validation.email) {
      valid = valid && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
    }

    return valid;
  };

  checkForm = () => {
    const formConfig = this.state.formConfig
    let validForm = true
    for(let key in formConfig){
      if(!formConfig[key].valid){
        validForm = false
      }
    }
    return validForm
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
          valid: this.checkInput(key, value)
        }
      }
    }));
    
  };

  onSubmit = async () => {
    if(!this.state.triedSubmit){
      await this.setState(state => ({
        ...state,
        triedSubmit: true
      }))
    }
    if(!this.checkForm()) {
      return
    }
    this.props.login(
      this.state.formConfig.email.value,
      this.state.formConfig.password.value
    );
  };

  render() {
    const formConfig = this.state.formConfig;
    const form = Object.keys(formConfig).map(key => (
      <View style={styles.input}>
        <Input
          onChangeText={this.onTextChanged(key)}
          value={formConfig[key].value}
          gradient
          placeholder={formConfig[key].placeholder}
          icon={formConfig[key].icon}
          valid={this.state.triedSubmit ? (formConfig[key].valid || !formConfig[key].touched) : true}
        />
      </View>
    ));
    const errorMsg = (
      <View>
          <Text customStyle={styles.errorTxt}>Invalid user/password!</Text>
      </View>
    )
    return (
      <ImageBackground source={loginBg} style={styles.base}>
        <View style={styles.logoContainer}>
          <Text>logo</Text>
        </View>
        {this.props.error && errorMsg}
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
