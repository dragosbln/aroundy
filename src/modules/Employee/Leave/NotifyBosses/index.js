import React from "react";
import { View, TextInput, FlatList } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import Heading from "../../../../components/Text/HeadingText";
import Button from "../../../../components/Buttons/BaseButton";
import PrimaryButton from "../../../../components/Buttons/PrimaryButton";
import ListItem from "./ListItem";
import mockData from "../../../../utils/mockData";
import utils from "../../../../utils/functions";
import AnimatedHeading from "../../../../components/AnimatedHeading";

export default class CalendarSCREEN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bosses: [],
      comment: "",
      currentPerdiod: 0,
      showingContainer: "",
      hidingContainer: "",
      triggerAnimation: true,
      showNextButton: true
    };
  }

  componentDidMount = () => {
    const bosses = mockData.bosses.map(el => ({
      ...el,
      active: false
    }));
    this.setState(state => ({
      ...state,
      bosses,
      showingContainer: utils.formatInterval(this.props.periods[0]),
      hidingContainer: this.props.periods[1]
        ? utils.formatInterval(this.props.periods[1])
        : null,
      showNextButton: this.props.periods.length > 1
    }));
  };

  onItemPressed = index => {
    const newBosses = [...this.state.bosses];

    newBosses[index] = {
      ...this.state.bosses[index],
      active: !this.state.bosses[index].active
    };

    this.setState(state => ({
      ...state,
      bosses: newBosses
    }));
  };

  onChangeText = value => {
    this.setState(state => ({
      ...state,
      comment: value
    }));
  };

  // onPressProceed = () => {
  //   this.props.setBosses(
  //     this.state.bosses.filter(boss => boss.active).map(boss => boss.id)
  //   );
  //   this.props.setComment(this.state.comment);
  // this.props.navigation.navigate("SuccessScreen");
  // };

  nextScreen = () => {
    return this.props.navigation.navigate("SuccessScreen");
  };

  onProceedPress = () => {
    this.props.setBosses(
      this.props.periods[this.state.currentPerdiod].id,
      this.state.bosses.filter(boss => boss.active).map(boss => boss.id)
    );
    this.props.setComment(
      this.props.periods[this.state.currentPerdiod].id,
      this.state.comment
    );
    this.setState(state => ({
      ...state,
      comment: 0,
      bosses: state.bosses.map(boss => ({ ...boss, active: false }))
    }));
    if (this.state.currentPerdiod >= this.props.periods.length - 2) {
      this.setState(state => ({
        ...state,
        showNextButton: false
      }));
    }
    if (this.state.currentPerdiod >= this.props.periods.length - 1) {
      return this.nextScreen();
    }
    this.setState(state => ({
      ...state,
      triggerAnimation: !state.triggerAnimation
    }));
  };

  updateShowingContainer = () => {
    return new Promise(async res => {
      await this.setState(state => ({
        ...state,
        showingContainer: state.hidingContainer
      }));
      res();
    });
  };

  nextStep = () => {
    return this.setState(state => ({
      ...state,
      hidingContainer: this.props.periods[state.currentPerdiod + 2]
        ? utils.formatInterval(this.props.periods[state.currentPerdiod + 2])
        : null,
      currentPerdiod: state.currentPerdiod + 1
    }));
  };

  onBackPressed = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.base}>
        <Header title="Send to bosses" />
        <View style={styles.headingContainer}>
          <AnimatedHeading
            updateShowingContainer={this.updateShowingContainer}
            nextStep={this.nextStep}
            showingContainer={this.state.showingContainer}
            hidingContainer={this.state.hidingContainer}
            triggerAnimation={this.state.triggerAnimation}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={this.state.comment}
            onChangeText={this.onChangeText}
            style={styles.input}
            placeholder="Comments"
          />
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={this.state.bosses}
            renderItem={({ item, index }) => (
              <ListItem
                active={this.state.bosses[index].active}
                onPress={() => this.onItemPressed(index)}
                id={`${index}`}
                key={`${index}`}
                name={item.name}
              />
            )}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.firstBtnRowContainer}>
            <View style={styles.backBtn}>
              <Button onPress={this.onBackPressed} label="BACK" />
            </View>
            <View style={styles.backBtn}>
              {this.state.showNextButton && (
                <Button onPress={this.onProceedPress} label="NEXT" />
              )}
            </View>
          </View>

          <View style={styles.setMeFreeBtn}>
            <PrimaryButton
              disabled={this.state.showNextButton}
              onPress={this.onProceedPress}
              label="SET ME FREE"
            />
          </View>
        </View>
      </View>
    );
  }
}
