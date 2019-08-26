import React from "react";
import { View, ImageBackground, FlatList } from "react-native";
import styles from "./styles";
import BalanceCard from "./BalanceCard";
import Counter from "../../../components/Counter";
import { homeBgTop } from "../../../assets/images";
import HeadingText from "../../../components/Text/HeadingText";
import ListItem from "./ListItem";
import RequestService from "../../../services/request";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: []
    };
  }

  componentDidMount = () => {
    this.setState(state => ({
      ...state,
      requests: RequestService.mergeUserRequests(this.props.users, this.props.requests)
    }))
  };



  render() {
    console.log('STATEEEE', this.state);
    
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
          <BalanceCard
            days={this.props.user && this.props.user.Balance.remaining}
          />
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.headingContainer}>
            <HeadingText customStyle={styles.headingTxt}>
              Departures
            </HeadingText>
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={this.state.requests}
              renderItem={({ item, index }) => <ListItem request={item} id={index} />}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          </View>
        </View>
      </View>
    );
  }
}
