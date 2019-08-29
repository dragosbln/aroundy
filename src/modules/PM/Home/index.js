import React from "react";
import { View, ImageBackground, FlatList } from "react-native";
import styles from "./styles";
import BalanceCard from "./BalanceCard";
import Counter from "../../../components/Counter";
import { homeBgTop } from "../../../assets/images";
import HeadingText from "../../../components/Text/HeadingText";
import ListItem from "./ListItem";
// import RequestService from "../../../services/request";
//TODO: show approved/rejected in list
export default class Home extends React.Component {

  componentDidUpdate = (prevProps) => {
    if(prevProps === this.props){
      return
    }
    if(!prevProps.requestApprovalSucccess && this.props.requestApprovalSucccess){
      this.props.getAllRequests()
    }
  }

  setRequestApproved = (id, approved) => {
    this.props.setRequestApproved(id, approved);
    this.setState
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
          <BalanceCard
            days={
              this.props.user &&
              this.props.user.Balance &&
              this.props.user.Balance.remaining
            }
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
              data={this.props.requests}
              keyExtractor={(item, index) => `hrhome-list-item-${index}`}
              renderItem={({ item, index }) => (
                <ListItem
                  request={item}
                  onApprovePress={() =>
                    this.setRequestApproved(item.Request.id, true)
                  }
                  onRejectPress={() =>
                    this.setRequestApproved(item.Request.id, false)
                  }
                />
              )}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          </View>
        </View>
      </View>
    );
  }
}
