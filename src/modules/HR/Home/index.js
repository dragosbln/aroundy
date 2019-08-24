import React from "react";
import { View, ImageBackground, FlatList } from "react-native";
import styles from "./styles";
import BalanceCard from "./BalanceCard";
import Counter from "../../../components/Counter";
import { homeBgTop } from "../../../assets/images";
import HeadingText from '../../../components/Text/HeadingText'
import ListItem from './ListItem'

export default class Home extends React.Component {
  constructor(props){
    super(props)

  }

  

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.topImageContainer}>
          <ImageBackground source={homeBgTop} style={styles.topImage}>
            <View style={styles.counterContainer}>
              <Counter toDate={"2019-12-26"} until={"Christmas"} />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.bgCardContainer}>
          <BalanceCard days={14} />
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.headingContainer}>
            <HeadingText customStyle={styles.headingTxt}>
              Departures
            </HeadingText>
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={[1,2,34,4,2,2]}
              renderItem={({ item, index }) => <ListItem id={index} />}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          </View>
        </View>
      </View>
    );
  }
}
