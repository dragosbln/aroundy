import React from "react";
import { View, TextInput, FlatList } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import Heading from "../../../../components/Text/HeadingText";
import Button from "../../../../components/Buttons/BaseButton";
import PrimaryButton from "../../../../components/Buttons/PrimaryButton";
import ListItem from "./ListItem";
import mockData from "../../../../utils/mockData";
import utils from "../../../../utils";

export default class CalendarSCREEN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bosses: [],
      comment: ""
    };
  }

  componentDidMount = () => {
    const bosses = mockData.bosses.map(el => ({
      ...el,
      active: false
    }));
    this.setState(state => ({
      ...state,
      bosses
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

  onPressProceed = () => {
    this.props.setBosses(
      this.state.bosses.filter(boss => boss.active).map(boss => boss.id)
    );
    this.props.setComment(this.state.comment);
    this.props.navigation.navigate("SuccessScreen");
  };

  onBackPressed = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.base}>
        <Header title="Send to bosses" />
        <View style={styles.headingContainer}>
          <Heading customStyle={styles.heading}>
            {utils.formatInterval({
              from: this.props.periods[0].from,
              to: this.props.periods[this.props.periods.length - 1].to
            })}
          </Heading>
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
              <Button onPress={this.onBackPressed} label="NEXT" />
            </View>
          </View>

          <View style={styles.setMeFreeBtn}>
            <PrimaryButton onPress={this.onPressProceed} label="SET ME FREE" />
          </View>
        </View>
      </View>
    );
  }
}
