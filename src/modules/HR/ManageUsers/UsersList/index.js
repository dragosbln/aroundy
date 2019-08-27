import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import { teamHeaderBg } from "../../../../assets/images";
import Input from "../../../../components/Input";
import colors from "../../../../assets/theme/colors";
import PrimaryButton from "../../../../components/Buttons/PrimaryButton";
import { SwipeListView } from "react-native-swipe-list-view";
import ListItem from "./ListItem";
import ListHiddenItem from "./ListHiddenItem";

export default class ManageUsers extends React.Component {
  onDeletePress = (index, rowMap, rowKey) => {
    if(rowMap[rowKey]){
      rowMap[rowKey].closeRowWithoutAnimation()
    }
    this.props.deleteUser(this.props.users[index].id)
  };

  onEditPress = index => {};

  onLoginPress = index => {};


  onResiterPress = () => {
    this.props.navigation.navigate({routeName: 'CreateUser'})
  }

  render() {
    return (
      <View style={styles.base}>
        <Header bg={teamHeaderBg} title="Manage Users" />
        <View style={styles.contentContainer}>
          <View style={styles.listContainer}>
            <SwipeListView
              data={this.props.users}
              keyExtractor={(item, index) => `hrhome-list-item-${index}`}
              renderItem={({ item, index }) => (
                
                <ListItem
                  name={`${item.firstName} ${item.lastName}`}
                  role={item.Contract ? item.Contract.role : ""}
                  imageSource={item.image}
                />
              )}
              renderHiddenItem={({index, item}, rowMap) => (
                <ListHiddenItem
                  onDeletePress={() => this.onDeletePress(index, rowMap, `hrhome-list-item-${index}`)}
                  onEditPress={this.onEditPress}
                  onLoginPress={this.onLoginPress}
                />
              )}
              rightOpenValue={-150}
              disableRightSwipe
              swipeToClosePercent={20}
              swipeToOpenPercent={20}
              ItemSeparatorComponent={() => (
                <View style={styles.listSeparator} />
              )}
            />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              label="Register new user"
              customTextStyle={styles.buttonTextStyle}
              onPress={this.onResiterPress}
            />
          </View>
        </View>
      </View>
    );
  }
}
