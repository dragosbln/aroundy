import React, { useState } from "react";
import { View, FlatList, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";
import { teamHeaderBg, filterActive } from "../../../../../assets/images";
import Header from "../../../../../components/Header";
import Heading from "../../../../../components/Text/HeadingText";
import LinearGradient from "react-native-linear-gradient";
import FilterHeader from "./FilterHeader";
import ListElement from "./ListElement";
import TextInput from "../../../../../components/Input";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DateTimePicker from "react-native-modal-datetime-picker";
import Button from '../../../../../components/Buttons/BaseButton'

export default props => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectingDate, setSelectingDate] = useState('')
 
  return (
    <View style={styles.base}>
      <LinearGradient
        colors={["#1F1F1F", "#787878"]}
        style={styles.linearGradient}>
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
              data={props.filter.name}
              renderItem={({ item, index }) => (
                <ListElement
                  active={props.filter.name[index].active}
                  onToggleNameActive={() =>
                    props.onToggleFilterActive("name", index)
                  }
                  name={item.name}
                />
              )}
            />
          </View>
          <View style={styles.timeFilterContainer}>
            <FilterHeader name="TIME" />
            <View style={styles.timeInputsContainer}>
              <TouchableOpacity style={styles.inputView}>
                <TextInput
                  valid
                  value={props.dateFilter.from}
                  editable={!showDatePicker}
                  onFocus={() => {setShowDatePicker(true); setSelectingDate('from')}}
                  placeholder="Starting"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.inputView}>
                <TextInput
                  valid
                  value={props.dateFilter.to}
                  editable={!showDatePicker}
                  onFocus={() => {setShowDatePicker(true); setSelectingDate('to')}}
                  placeholder="Ending"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.iconContainer}>
              <Icon name="calendar-month-outline" size={30} color="#fff" />
            </View>
          </View>
          <DateTimePicker
            isVisible={showDatePicker}
            onCancel={() => setShowDatePicker(false)}
            onConfirm={(date) => {props.onChooseDate(selectingDate, date); setShowDatePicker(false)}}
          />
          <View style={styles.typeFilterContainer}>
            <FilterHeader name="TYPE" />
            <FlatList
              data={props.filter.type}
              renderItem={({ item, index }) => (
                <ListElement
                  active={props.filter.type[index].active}
                  onToggleNameActive={() =>
                    props.onToggleFilterActive("type", index)
                  }
                  name={item.name}
                  squareCheck
                />
              )}
            />
          </View>
          <View style={styles.statusFilterContainer}>
            <FilterHeader name="STATUS" />
            <FlatList
              data={props.filter.status}
              renderItem={({ item, index }) => (
                <ListElement
                  active={props.filter.status[index].active}
                  onToggleNameActive={() =>
                    props.onToggleFilterActive("status", index)
                  }
                  name={item.name}
                  squareCheck
                />
              )}
            />
          </View>
          <View style={styles.buttonView}>
              <Button onPress={props.onApplyPress} label='APPLY' />
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};
