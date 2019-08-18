import React from "react";
import { View, Dimensions } from "react-native";
import styles from "./styles";
import { VictoryPie } from "victory-native";
import colors from "../../../../assets/theme/colors";
import Legend from "../../../../components/Legend";
import Header from "../../../../components/Header";
import Text from '../../../../components/Text/BaseText'
import { teamHeaderBg } from "../../../../assets/images";
import Icon from 'react-native-vector-icons/Ionicons'
import Main from './Main'

const screenW = Dimensions.get("window").width;

const dummy = [
  {
    name: "Leave",
    color: colors.green
  },
  {
    name: "idk",
    color: colors.yellow
  },
  {
    name: "idk2",
    color: colors.pink
  }
];

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.base}>
        <Header bg={teamHeaderBg} title="My Team" />
        <View style={styles.headingContainer}>
          <Text customStyle={styles.headingTxt}>BOOK DAYS OFF</Text>
          <Icon style={styles.chart} name='ios-download' />
        </View>
        <View style={styles.chartContainer}>
          <VictoryPie
            data={[{ y: 35 }, { y: 40 }, { y: 55 }]}
            colorScale={[
              colors.pink,
              colors.yellow,
              colors.orange,
              colors.green
            ]}
            labels={() => null}
            innerRadius={75}
            style={styles.chart}
            width={screenW / 1.5}
            height={screenW / 1.5}
            padding={0}
          />
        </View>
        <View style={styles.legendContainer}>
          <Legend data={dummy} />
        </View>
        <View style={styles.mainContainer}>
          <Main/>
        </View>
      </View>
    );
  }
}
