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
    this.state = {
      requests = []
    }
  }

  componentDidMount = () => {
    if (!this.props.countdownHoliday) {
      this.props.getCountdownHoliday();
    }
    if(!this.props.user){
      this.props.getCurrentUser()
    } else {
      this.props.user.Teams.forEach(team => {
        this.props.getTeamRequests()
      });
    }
    //DOING A LOT OF REQUESTS! U DON'T KNOW WHICH IS WHICH, IN REDUCER
    
  }; 

  componentDidUpdate = (prevProps) => {
    if(prevProps === this.props) {
      return
    }
    if(prevProps.user !== this.props.user){
      this.props.user.Teams.forEach(team => {
        this.props.getTeamRequests()
      });
    }
    if(prevProps.requests !== this.props.requests){
      const requests = this.props.requests.map(request => {
        
      })
    }

  }

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
          <BalanceCard days={this.props.user && this.props.user.Balance.remaining} />
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
