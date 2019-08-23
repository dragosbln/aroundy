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

const screenW = Dimensions.get("window").width;

const dummy = [
  {
    label: "Leave",
    color: colors.green
  },
  {
    label: "idk",
    color: colors.yellow
  },
  {
    label: "idk2",
    color: colors.pink
  }
];

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.base}>
        <Header bg={teamHeaderBg} title="Ann Andria" picture={profilePic} />
        <View style={styles.headingContainer}>
          <Text customStyle={styles.headingTxt}>BOOK DAYS OFF</Text>
          <Icon style={styles.chart} name="ios-download" />
        </View>
        <View style={styles.chartContainer}>
          <VictoryPie
            data={[{ x: 35, y: 35 }, { x: 40, y: 40 }, { x: 55, y: 55 }]}
            colorScale={[
              colors.pink,
              colors.yellow,
              colors.green
            ]}
            padAngle={2}
            innerRadius={screenW / 6.8}
            labelRadius={screenW / 5}
            style={{labels: { fill: '#fff', fontSize: 20}}}
            width={screenW / 1.7}
            height={screenW / 1.7}
            padding={0}
          />
        </View>
        <View style={styles.legendContainer}>
          <Legend data={dummy} />
        </View>
        <View style={styles.mainContainer}>
          <Main />
        </View>
      </View>
    );
  }
}
