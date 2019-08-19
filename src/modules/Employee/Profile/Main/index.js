import React from "react";
import { View } from "react-native";
import styles from "./styles";
import HeadingText from "../../../../components/Text/HeadingText";
import List from './List'

export default props => {
    return (
      <View style={styles.base}>
        <View {...props.panHandlers} style={styles.headingContainer}>
          <HeadingText customStyle={styles.headingTxt}>History</HeadingText>
        </View>
        <View style={styles.listContainer}>
          <List />
        </View>
      </View>
    );
}
