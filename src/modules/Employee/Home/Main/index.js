import React from "react";
import { View } from "react-native";
import styles from "./styles";
import HeadingText from "../../../../components/Text/HeadingText";
import List from './List'

export default props => {
    return (
      <View style={styles.base}>
        <View style={styles.headingContainer}>
          <HeadingText customStyle={styles.headingTxt}>Bank holidays</HeadingText>
        </View>
        <View style={styles.listContainer}>
          <List />
        </View>
      </View>
    );
}
