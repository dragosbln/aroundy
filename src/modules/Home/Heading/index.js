import React from "react";
import { View, ImageBackground } from "react-native";
import { homeBgTop } from "../../../assets/images";
import styles from "./styles";
import HeadingText from "../../../components/Text/HeadingText";
import Text from "../../../components/Text/BaseText";

export default props => {
    return (
      <ImageBackground source={homeBgTop} style={styles.base}>
        <View style={styles.counterContainer}>
          <HeadingText customStyle={styles.counterHeading}>
            {props.counter}
          </HeadingText>
          <Text customStyle={styles.counterFooter}>until {props.until}</Text>
        </View>
      </ImageBackground>
    );
}
