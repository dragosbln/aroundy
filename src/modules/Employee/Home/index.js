import React from "react";
import { View, FlatList, ImageBackground } from "react-native";
import styles from "./styles";
import BalanceCard from "./BalanceCard";
import HeadingText from "../../../components/Text/HeadingText";
import ListItem from "./ListItem";
import ListHeader from "./ListHeader";
import { homeBgTop } from "../../../assets/images";
import Counter from "../../../components/Counter";
import moment from "moment";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: null
    };
  }

  updateCounter = () => {
    setInterval(() => {
      const currentTime = moment().valueOf();
      const holidayTime = moment(this.props.countdownHoliday.date.iso);
      const duration = moment.duration(holidayTime - currentTime);
      const counter = `${
        duration.months() > 0 ? `${duration.months()}m` : ""
      } ${duration.weeks() > 0 ? `${duration.weeks()}w` : ""} ${
        duration.days() > 0 ? `${duration.days()}d` : ""
      } ${duration.hours() > 0 ? `${duration.hours()}h` : ""} ${
        duration.minutes() > 0 ? `${duration.minutes()}m` : ""
      } ${duration.seconds() > 0 ? `${duration.seconds()}s` : ""}`;
      this.setState(state => ({
        ...state,
        counter
      }));
    }, 1000);
  };

  componentDidMount() {
    this.props.getHolidays();
    this.props.getCachedCountdownHoliday();
    this.updateCounter();
  }

  onListItemPressed = (i) => {
    this.props.setCountdownHoliday(this.props.holidays[i])
  }

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.topImageContainer}>
          <ImageBackground source={homeBgTop} style={styles.topImageBackground}>
            <View style={styles.counterContainer}>
              <Counter counter={this.state.counter} until={this.props.countdownHoliday && this.props.countdownHoliday.name} />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.bgCardContainer}>
          <BalanceCard days={14} />
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
                <ListItem onPress={() => this.onListItemPressed(index)} name={item.name} date={item.date.iso} id={index} />
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
