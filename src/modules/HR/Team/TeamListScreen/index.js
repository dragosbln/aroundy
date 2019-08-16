import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import {teamHeaderBg} from '../../../../assets/images'
import Main from './Main'
import {filter} from '../../../../assets/images'

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.base}>
        <Header bg={teamHeaderBg} title="My Team" option={filter} />
        <View style={styles.mainContainer}>
          <Main />
        </View>
      </View>
    );
  }
}
