import React from "react";
import { View, ImageBackground, FlatList } from "react-native";
import styles from "./styles";
import BalanceCard from "./BalanceCard";
import Counter from "../../../components/Counter";
import { homeBgTop } from "../../../assets/images";
import HeadingText from "../../../components/Text/HeadingText";
import ListItem from "./ListItem";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    if (!this.props.countdownHoliday) {
      this.props.getCountdownHoliday();
    }
    if(!this.props.balance){
      this.props.getCurrentUser()
    }
  };

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.topImageContainer}>
          <ImageBackground source={homeBgTop} style={styles.topImage}>
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
              Departures
            </HeadingText>
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={[1, 2, 34, 4, 2, 2]}
              renderItem={({ item, index }) => <ListItem id={index} />}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          </View>
        </View>
      </View>
    );
  }
}
