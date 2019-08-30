import React from "react";
import { View, Dimensions, Animated, PanResponder } from "react-native";
import styles from "./styles";
import { VictoryPie } from "victory-native";
import colors from "../../../../assets/theme/colors";
import Legend from "../../../../components/Legend";
import Header from "../../../../components/Header";
import Text from "../../../../components/Text/BaseText";
import { teamHeaderBg, profilePic } from "../../../../assets/images";
import Icon from "react-native-vector-icons/Ionicons";
import Main from "./Main";
import appData from "../../../../utils/appData";
import HistoryCard from "../../../../components/HistoryCard";
import moment from 'moment'

const screenW = Dimensions.get("window").width;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.screen = {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height
    };
    this.state = {
      chartData: null,
      colorScale: null,
      legendData: null,
      noHistory: false,
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
    const historyData = this.props.report[0].requests.map(request => ({
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
    const id = this.props.navigation.getParam("id");
    this.props.getReport({ users: [id] });
    this.setupPanResponder();
    // await this.setState(state => ({
    //   ...state,
    //   nextHoliday: this.props.holidays[0]
    // }));
    
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

  componentDidUpdate = prevProps => {
    if (!prevProps.getReportSuccess && this.props.getReportSuccess) {

      const chartData = [];
      const colorScale = [];
      const legendData = [];
      let report;
      if (this.props.report[0]) {
        report = this.props.report[0].report;
      } else {
        return this.setState(state => ({
          ...state,
          noHistory: true
        }));
      }
      console.log(
        "===============>>>>>>akafkljbdiajfbviuaOBFDSIUAH>>>",
        report
      );
    this.initRequestsHistoryData();


      Object.keys(report).forEach(key => {
        chartData.push({
          x: report[key],
          y: report[key]
        });
        colorScale.push(appData.leaveColors[key]);
        if (!legendData.find(data => data.label === appData.leaveTypes[key])) {
          legendData.push({
            label: appData.leaveTypes[key],
            color: appData.leaveColors[key]
          });
        }
      });
      this.setState(state => ({
        ...state,
        chartData,
        colorScale,
        legendData
      }));
    }
  };

  render() {
    return (
      <View style={styles.base}>
        {this.state.noHistory ? (
          <View style={styles.errorHeadingContainer}>
            <Text customStyle={styles.errorHeadingTxt}>NO HIST0RY DATA!</Text>
          </View> 
        ) : (
          this.state.chartData !== null && (
            <>
              <Header bg={teamHeaderBg} title={this.props.report[0] && `${this.props.report[0].user.firstName} ${this.props.report[0].user.lastName}`} />

              <View style={styles.headingContainer}>
                <Text customStyle={styles.headingTxt}>BOOK DAYS OFF</Text>
                <Icon style={styles.chart} name="ios-download" />
              </View>
              <View style={styles.chartContainer}>
                <VictoryPie
                  data={this.state.chartData}
                  colorScale={this.state.colorScale}
                  padAngle={2}
                  innerRadius={screenW / 6.8}
                  labelRadius={screenW / 5}
                  style={{ labels: { fill: "#fff", fontSize: 20 } }}
                  width={screenW / 1.7}
                  height={screenW / 1.7}
                  padding={0}
                />
              </View>
              <View style={styles.legendContainer}>
                <Legend data={this.state.legendData} />
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
            </>
          )
        )}
      </View>
    );
  }
}
