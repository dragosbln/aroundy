import React from "react";
import { View, Picker, ActivityIndicator, Platform } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import { teamHeaderBg } from "../../../../assets/images";
import Input from "../../../../components/Input";
import colors from "../../../../assets/theme/colors";
import PrimaryButton from "../../../../components/Buttons/PrimaryButton";
import utils from "../../../../utils/functions";
import Text from "../../../../components/Text/BaseText";
import LottieView from "lottie-react-native";
import { rocket } from "../../../../assets/animations";

export default class ManageUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formConfig: {
        email: {
          value: "",
          placeholder: "Email",
          valid: false,
          touched: false,
          validation: {
            required: true,
            email: true
          }
        },
        firstName: {
          value: "",
          placeholder: "First Name",
          valid: false,
          touched: false,
          validation: {
            required: true
          }
        },
        lastName: {
          value: "",
          placeholder: "Last Name",
          valid: false,
          touched: false,
          validation: {
            required: true
          }
        },
        
      },
      picker: {
        items: {
          employee: "Employee",
          "project-manager": "Project Manager",
          "human-resources": "Human Resources"
        },
        selectedValue: "employee"
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
          touched: true,
          valid: utils.checkInput(this.state.formConfig, key, value)
        }
      }
    }));
  };

  //TODO: fix animation timing
  nextScreen = () => {
    this.props.navigation.navigate('UsersList')
  }

  

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
    const userData = {
      email: formConfig.email.value,
      firstName: formConfig.firstName.value,
      lastName: formConfig.lastName.value,
      role: this.state.picker.selectedValue
    }
    this.props.createUser(userData)
    // this.props.createUser({
    //   email: 'dragos.bilaniuc.around25+1@gmail.com',
    //   firstName: 'test',
    //   lastName: 'testovich',
    //   role: 'employee'
    // })
  };

  renderForm() {
    const formConfig = this.state.formConfig;
    return Object.keys(formConfig).sort().map((key, index) => (
      <View key={index} style={styles.input}>
        <Input
          key={index}
          onChangeText={this.onTextChanged(key)}
          value={formConfig[key].value}
          placeholder={formConfig[key].placeholder}
          icon={formConfig[key].icon}
          gradientColors={[colors.gray_primary, colors.gray_light]}
          textStyle={styles.textStyle}
          placeholderTextColor={colors.gray_primary}
          valid={this.state.triedSubmit ? (formConfig[key].valid || !formConfig[key].touched) : true}
        />
      </View>
    ));
  }

  onValueChange = val => {
    this.setState(state => ({
      ...state,
      picker: {
        ...state.picker,
        selectedValue: val
      }
    }));
  };

  render() {
    let status = null;
    if (this.props.pending) {
      status = <ActivityIndicator size="small" color={colors.orange} />;
    }
    if (this.props.error) {
      status = (
        <Text style={styles.errorText}>
          An error occured. Please try again later.
        </Text>
      );
    }

    return (
      <View style={styles.base}>
        <Header bg={teamHeaderBg} title="Manage Users" />
        {this.props.success ? (
          <View style={[styles.animationContainer, Platform.OS === 'ios' && styles.animationContainerIOS]}>
            <LottieView source={rocket} autoPlay onAnimationFinish={this.nextScreen} loop={false}/>
          </View>
        ) : (
          <>
            <View style={styles.contentContainer}>
              <View style={styles.statusContainer}></View>

              <View style={styles.formContainer}>
                {this.renderForm()}
                <Picker
                  style={styles.picker}
                  selectedValue={this.state.picker.selectedValue}
                  onValueChange={this.onValueChange}
                  
                >
                  {Object.keys(this.state.picker.items).map((key, index) => (
                    <Picker.Item
                      key={`picker-${index}`}
                      value={key}
                      label={this.state.picker.items[key]}
                    />
                  ))}
                </Picker>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton
                  label="Register new user"
                  customTextStyle={styles.buttonTextStyle}
                  onPress={this.onSubmit}
                />
              </View>
            </View>
          </>
        )}
      </View>
    );
  }
}
