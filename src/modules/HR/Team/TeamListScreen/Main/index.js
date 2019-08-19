import React from 'react'
import { View } from "react-native";
import styles from "./styles";
import List from './List'

export default props => {
    return (
      <View style={styles.base}>
        <View style={styles.listContainer}>
          <List />
        </View>
      </View>
    );
}
