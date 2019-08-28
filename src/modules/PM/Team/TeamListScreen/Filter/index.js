import React from "react";
import { View, FlatList, ScrollView } from "react-native";
import styles from "./styles";
import { teamHeaderBg, filterActive } from "../../../../../assets/images";
import Header from "../../../../../components/Header";
import Heading from "../../../../../components/Text/HeadingText";
import LinearGradient from "react-native-linear-gradient";
import FilterHeader from "./FilterHeader";
import ListElement from "./ListElement";
import TextInput from "../../../../../components/Input";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const dummy = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

export default props => {
  return (
    <View style={styles.base}>
      <LinearGradient
        colors={["#1F1F1F", "#787878"]}
        style={styles.linearGradient}
      >
        <Header
          bg={teamHeaderBg}
          title="My Team"
          onOptionPressed={props.onModalClose}
          option={filterActive}
        />
        <ScrollView style={styles.filtersContainer}>
          <Heading customStyle={styles.headingTxt}>Filter</Heading>
          <View style={styles.nameFilterContainer}>
            <FilterHeader name="NAME" />
            <FlatList
              data={dummy}
              renderItem={() => <ListElement name="Ali Akbaar" />}
            />
          </View>
          <View style={styles.timeFilterContainer}>
            <FilterHeader name="TIME" />
            <View style={styles.timeInputsContainer}>
              <View style={styles.inputView}>
                <TextInput placeholder="Starting" />
              </View>
              <View style={styles.inputView}>
                <TextInput placeholder="Ending" />
              </View>
            </View>
            <View style={styles.iconContainer}>
              <Icon name='calendar-month-outline' size={30} color='#fff' />
            </View>
          </View>
          <View style={styles.typeFilterContainer}>
            <FilterHeader name="TYPE" />
            <FlatList
              data={[1,1,1,1,1]}
              renderItem={() => <ListElement squareCheck name="Maternal Leave" />}
            />
          </View>
          <View style={styles.statusFilterContainer}>
            <FilterHeader name="STATUS" />
            <FlatList
              data={[1,2,3]}
              renderItem={() => <ListElement active name="Pending" />}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};
