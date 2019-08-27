import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Header from "../../../components/Header";
import { teamHeaderBg } from "../../../assets/images";
import Input from "../../../components/Input";
import colors from "../../../assets/theme/colors";

export default class ManageUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formConfig: {
        firstName: {
          value: "",
          placeholder: "First Name",
          valid: true,
          touched: false,
          validation: {
            required: true,
            email: true
          }
        },
        lastName: {
          value: "",
          placeholder: "Last Name",
          valid: true,
          touched: false,
          validation: {
            required: true
          }
        },
        email: {
          value: "",
          placeholder: "Email",
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

  onTextChanged = key => async value => {
    await this.setState(state => ({
      ...state,
      formConfig: {
        ...state.formConfig,
        [key]: {
          ...state.formConfig[key],
          value: value,
          touched: true
          //   valid: this.checkInput(key, value)
        }
      }
    }));
  };

  renderForm() {
    const formConfig = this.state.formConfig;
    return Object.keys(formConfig).map((key, index) => (
      <View key={index} style={styles.input}>
        <Input
          onChangeText={this.onTextChanged(key)}
          value={formConfig[key].value}
          placeholder={formConfig[key].placeholder}
          icon={formConfig[key].icon}
          gradientColors={[colors.gray_primary, colors.gray_light]}
          textStyle={styles.textStyle}
          placeholderTextColor={colors.gray_primary}
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
    return (
      <View style={styles.base}>
        <Header bg={teamHeaderBg} title="Manage Users" />
        <View style={styles.contentContainer}>
          <View style={styles.formContainer}>{this.renderForm()}</View>
        </View>
      </View>
    );
  }
}
