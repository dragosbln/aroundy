import React from "react";
import { View, Animated, PanResponder, Dimensions } from "react-native";
import styles from "./styles";
import Header from "../../../components/Header";
import { profileBg } from "../../../assets/images";
import CircularImage from "../../../components/CircularImage";
import Text from "../../../components/Text/BaseText";
import TextButton from "../../../components/Buttons/TextButton";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import Counter from "../../../components/Counter";
import HistoryCard from "../../../components/HistoryCard";
import utils from "../../../utils/functions";
import moment from "moment";
import appData from "../../../utils/appData";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.screen = {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height
    };
    this.state = {
      cardTop: 0.7 * this.screen.height,
      moveTop: new Animated.Value(0),
      dragging: false,
      panResponder: null,
      approvedRequest: null,
      nextHoliday: null,
      // pendingRequest: null,
      // rejectedRequest: null,
      message: "", 
      historyData: null
    };
  }

  initRequestsHistoryData = () => {
    const historyData = this.props.user.Requests.map(request => ({
      from: request.from,
      to: request.to,
      type: appData.leaveTypes[request.type],
      status: request.status
    }));

    const futureRequests = historyData.filter(el => moment() < moment(el.from));

    futureRequests.sort(
      (el1, el2) => moment(el1.from).valueOf() - moment(el2.from).valueOf()
    );

    const pastRequests = historyData.filter(el => moment() > moment(el.from));
    pastRequests.sort(
      (el1, el2) => moment(el2.from).valueOf() - moment(el1.from).valueOf()
    );

    this.setState(state => ({
      ...state,
      historyData: [
        ...futureRequests,
        {}, //separator element, in list
        ...pastRequests
      ]
    }));
  };

  componentDidMount = async () => {
    this.setupPanResponder();
    await this.setState(state => ({
      ...state,
      nextHoliday: this.props.holidays[0]
    }));
    
    this.setMessage();
    this.initRequestsHistoryData();
  };

  setupPanResponder = () => {
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => {
        return true;
      },
      onPanResponderMove: Animated.event([
        null,
        {
          dy: this.state.moveTop
        }
      ]),
      onPanResponderRelease: async (e, gestureState) => {
        await this.setState({
          cardTop: this.state.cardTop + gestureState.dy,
          moveTop: new Animated.Value(0)
        });
        this.setupPanResponder();
      }
    });
    this.setState(state => ({
      ...state,
      panResponder
    }));
  };

  setMessage = () => {
    const approvedRequest = this.props.user.Requests.find(request => {
      if (moment() > moment(request.from)) {
        return false;
      }
      return request.status === "approved";
    });
    
    if (
      !approvedRequest ||
      moment(approvedRequest.from) > moment(this.state.nextHoliday.date.iso)
    ) {
      return this.setState(state => ({
        ...state,
        message: "You have no approved requests"
      }));
    }

    this.setState(state => ({
      ...state,
      message: `Your request for ${utils.formatInterval(
        { from: approvedRequest.from, to: approvedRequest.to },
        true
      )} was approved.`,
      approvedRequest
    }));

    // const pendingRequest = this.props.user.Requests.find(
    //   request =>
    //     request.status !== "processed" && moment() < moment(request.from)
    // );
    // if (pendingRequest) {
    //   return this.setState(state => ({
    //     ...state,
    //     pendingRequest
    //   }));
    // }
    // const rejectedRequest = this.props.user.Requests.find(request => {
    //   if (moment() > moment(request.from)) {
    //     return false;
    //   }
    //   const approval = this.props.user.RequestApprovals.find(
    //     reqApp => reqApp.status === "not-approved"
    //   );
    //   return approval;
    // });
    // if (rejectedRequest) {
    //   return this.setState(state => ({
    //     ...state,
    //     rejectedRequest
    //   }));
    // }
  };

  onPressButton = () => {
    this.props.navigation.navigate("Leave");
  };

  onPressCancel = () => {
    //TODO: implement cancel logic
  };

  render() {
    // let message = "You have no requests";
    // if (this.state.rejectedRequest) {
    //   message = `Your request for ${utils.formatInterval(
    //     {
    //       from: this.state.rejectedRequest.from,
    //       to: this.state.rejectedRequest.to
    //     },
    //     true
    //   )} has been rejected.`;
    // } else if (this.state.pendingRequest) {
    //   message = `Your request for ${utils.formatInterval(
    //     {
    //       from: this.state.pendingRequest.from,
    //       to: this.state.pendingRequest.to
    //     },
    //     true
    //   )} is pending.`;
    // } else
    // if (this.state.approvedRequest) {
    //   message = `Your request for ${utils.formatInterval(
    //     {
    //       from: this.state.approvedRequest.from,
    //       to: this.state.approvedRequest.to
    //     },
    //     true
    //   )} has been approved.`;
    // }
    return (
      <View style={styles.base}>
        <Header
          title={`${this.props.user.firstName} ${this.props.user.lastName}`}
          bg={profileBg}
          customStyle={styles.header}
          textContainerStyle={styles.textContainerStyle}
          textStyle={styles.headerTextStyle}
        />
        <View style={styles.profilePicContainer}>
          <CircularImage source={this.props.user.image} />
        </View>
        <View style={styles.summaryContainer}>
          <Text customStyle={styles.summaryTxt}>{this.state.message}</Text>
        </View>

        {this.state.nextHoliday || this.state.approvedRequest ? (
          <View style={styles.counterContainer}>
            <Counter
              toDate={
                this.state.approvedRequest
                  ? this.state.approvedRequest.from
                  : this.state.nextHoliday.date.iso
              }
              name={this.state.approvedRequest ? "Vacation Day" : this.state.nextHoliday.name}
              counterStyle={styles.counterStyle}
              footerStyle={styles.footerStyle}
            />
          </View>
        ) : null}
        {this.state.approvedRequest && <View style={styles.cancelContainer}>
          <TextButton
            onPress={this.onPressCancel}
            customStyle={styles.cancelTxt}>
            Cancel request
          </TextButton>
        </View>}
        <View style={styles.setMeFreeBtn}>
          <PrimaryButton
            onPress={this.onPressButton}
            label="REQUEST A DAY OFF"
          />
        </View>
        <Animated.View
          style={[
            styles.mainContainer,
            {
              top: Animated.add(this.state.cardTop, this.state.moveTop)
            }
          ]}>
          <HistoryCard
            data={this.state.historyData}
            panHandlers={
              this.state.panResponder && this.state.panResponder.panHandlers
            }
          />
        </Animated.View>
      </View>
    );
  }
}
