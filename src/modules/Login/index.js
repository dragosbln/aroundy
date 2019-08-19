import React from "react";
import { ImageBackground, View, Text } from "react-native";
import { loginBg } from "../../assets/images";
import styles from "./styles";
import Input from "../../components/Input";
import TextButton from "../../components/Buttons/TextButton";
import Button from "../../components/Buttons/PrimaryButton";
import { passwordIcon, emailIcon } from "../../assets/images";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formConfig: {
        email: {
          value: "",
          placeholder: "Email",
          icon: emailIcon
        },
        password: {
          value: "",
          placeholder: "Password",
          icon: passwordIcon
        }
      }
    };
  }

  componentDidUpdate(){
    if(this.props.user){
      if( this.props.user.Roles.find(el => el.name === 'human-resources')){
        this.props.navigation.navigate('HR')
      }
      if( this.props.user.Roles.find(el => el.name === 'employee')){
        this.props.navigation.navigate('Employee')
      }
    }
  }

  onTextChanged = key => value => {
    this.setState(state => ({
      ...state,
      formConfig: {
        ...state.formConfig,
        [key]: {
          ...state.formConfig[key],
          value: value
        }
      }
    }))
  };

  onSubmit = () => {
    this.props.login(this.state.formConfig.email.value, this.state.formConfig.password.value)
  }

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
        />
      </View>
    ));
    return (
      <ImageBackground source={loginBg} style={styles.base}>
        <View style={styles.logoContainer}>
          <Text>{this.props.user!==null && this.props.user.firstName}</Text>
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
