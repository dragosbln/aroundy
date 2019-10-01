import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import Text from "../../../../components/Text/BaseText";
import moment from 'moment'

export default props => {
  
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.base}>
      <View style={styles.container}>
        <Text>{props.name}</Text>
        <Text>{moment(props.date).format('MMM D')}</Text>
      </View>
    </TouchableOpacity>
  );
};
