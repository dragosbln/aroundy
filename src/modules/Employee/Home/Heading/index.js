import React from "react";
import { View, ImageBackground } from "react-native";
import { homeBgTop } from "../../../../assets/images";
import styles from "./styles";
import Counter from '../../../../components/Counter'

export default props => {
    return (
      <ImageBackground source={homeBgTop} style={styles.base}>
        <View style={styles.counterContainer}>
          <Counter counter={props.counter} until={props.until}/>
        </View>
      </ImageBackground>
    );
}
