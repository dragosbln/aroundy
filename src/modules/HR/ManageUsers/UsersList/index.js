import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import { teamHeaderBg, nope, nein } from "../../../../assets/images";
import Input from "../../../../components/Input";
import colors from "../../../../assets/theme/colors";
import PrimaryButton from "../../../../components/Buttons/PrimaryButton";
import { SwipeListView } from "react-native-swipe-list-view";
import ListItem from "./ListItem";
import ListHiddenItem from "./ListHiddenItem";

//URGENT: show confirm delete modal

export default class ManageUsers extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      nope: false,
      nein: false
    }
  }

  onDeletePress = (index, rowMap, rowKey) => {
    if(rowMap[rowKey]){
      rowMap[rowKey].closeRowWithoutAnimation()
    }
    this.props.deleteUser(this.props.users[index].id)
    this.setState(state => ({
      ...state,
      nope: false,
      nein: false
    }))
  };

  onEditPress = index => {
    this.setState(state => ({
      ...state,
      nein: false,
      nope:true
    }))
  };

  onLoginPress = index => {
    this.setState(state => ({
      ...state,
      nein: true,
      nope:false
    }))
  };


  onResiterPress = () => {
    this.props.navigation.navigate({routeName: 'CreateUser'})
  }

  componentDidUpdate = (prevProps) => {
    
    if(!prevProps.deleteSuccess && this.props.deleteSuccess){
      this.props.getTeamMembers()
    }
  }

  render() {
    return (
      <View style={styles.base}>
        <Header bg={teamHeaderBg} title="Manage Users" />
        <View style={styles.contentContainer}>
        {this.state.nope ? <Image source={nope} width={100} height={100} resizeMode='contain' />:null}
        {this.state.nein ? <Image source={nein} width={100} height={100} resizeMode='contain' />:null}
          <View style={styles.listContainer}>
            <SwipeListView
              data={this.props.users}
              keyExtractor={(item, index) => `hrhome-list-item-${index}`}
              renderItem={({ item, index }) => (
                
                <ListItem
                  name={`${item.firstName} ${item.lastName}`}
                  role={item.Contract ? item.Contract.role : ""}
                  inactive={item.status === 'inactive'}
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
