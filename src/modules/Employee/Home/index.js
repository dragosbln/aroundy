import React from "react";
import { View, FlatList, ImageBackground } from "react-native";
import styles from "./styles";
import BalanceCard from "./BalanceCard";
import HeadingText from "../../../components/Text/HeadingText";
import ListItem from "./ListItem";
import ListHeader from "./ListHeader";
import { homeBgTop } from "../../../assets/images";
import Counter from "../../../components/Counter";

export default class Home extends React.Component {
  componentDidMount() {
    if(!this.props.balance){
      this.props.getCurrentUser()
    }

    this.props.getHolidays();
    this.props.getCountdownHoliday();
  }

  onListItemPressed = i => {
    this.props.setCountdownHoliday(this.props.holidays[i]);
  };

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.topImageContainer}>
          <ImageBackground source={homeBgTop} style={styles.topImageBackground}>
            <View style={styles.counterContainer}>
              <Counter
                toDate={
                  this.props.countdownHoliday &&
                  this.props.countdownHoliday.date.iso
                }
                name={
                  this.props.countdownHoliday &&
                  this.props.countdownHoliday.name
                }
              />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.bgCardContainer}>
          <BalanceCard days={this.props.balance} />
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.headingContainer}>
            <HeadingText customStyle={styles.headingTxt}>
              Bank holidays
            </HeadingText>
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={this.props.holidays}
              renderItem={({ item, index }) => (
                <ListItem
                  onPress={() => this.onListItemPressed(index)}
                  name={item.name}
                  date={item.date.iso}
                  id={index}
                />
              )}
              ListHeaderComponent={<ListHeader />}
              stickyHeaderIndices={[0]}
            />
          </View>
        </View>
      </View>
    );
  }
}
