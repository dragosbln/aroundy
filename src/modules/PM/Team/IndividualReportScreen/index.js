import React from "react";
import { View, Dimensions } from "react-native";
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

const screenW = Dimensions.get("window").width;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: null,
      colorScale: null,
      legendData: null,
      noHistory: false
    };
  }

  componentDidMount = () => {
    const id = this.props.navigation.getParam("id");
    this.props.getReport({ users: [id] });
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
              <Header bg={teamHeaderBg} title="Ann Andria" />

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
              <View style={styles.mainContainer}>
                <Main />
              </View>
            </>
          )
        )}
      </View>
    );
  }
}
