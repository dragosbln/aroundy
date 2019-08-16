import React from 'react'
import { View } from "react-native";
import styles from "./styles";
import {teamHeaderBg, filter} from '../../../../../assets/images'
import Header from '../../../../../components/Header'

export default props => {
    return (
      <View style={styles.base}>
      <Header bg={teamHeaderBg} title="My Team" option={filter} />
      </View>
    );
}
