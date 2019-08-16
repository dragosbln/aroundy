import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Header from "../../../components/Header";

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.base}>
        <Header title="My Team" />
      </View>
    );
  }
}
