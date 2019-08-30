import React from "react";
import { View, Modal, FlatList, Animated } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import { teamHeaderBg } from "../../../../assets/images";
import { filter } from "../../../../assets/images";
import Filter from "./Filter";
import ListItem from "./ListItem";
import Button from "../../../../components/Buttons/BaseButton";
import appData from "../../../../utils/appData";
import moment from 'moment'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      users: [],
      showingUsers: [],
      showButton: false,
      filter: {
        name: {},
        date: {
          from: null,
          to: null
        },
        type: {},
        status: {}
      },
      animations: {
        buttonBottom: new Animated.Value(-100)
      }
    };
  }

  componentDidMount = () => {
    const users = this.props.users.map(user => ({
      ...user,
      active: false
    }))
    this.setState(state => ({
      ...state,
      users,
      showingUsers: users,
      filter: {
        ...state.filter,
        name: [
          {
            name: 'All',
            active: false
          },
          ...this.props.users.map(user => ({
            id: user.id,
          name: `${user.firstName} ${user.lastName}`,
          active: false
        }))
      ],
        type: Object.keys(appData.leaveTypes).map(key => ({
          name: key,
          active: false
        })),
        status: ["pending", "processing", "approved", "not-approved", "processed"].map(el => ({
          name: el,
          active: false
        }))
      }
    }));
  };

  onToggleActive = index => {
    const updatedShowingUsers = [...this.state.showingUsers];
    updatedShowingUsers[index] = {
      ...this.state.users[index],
      active: !this.state.showingUsers[index].active
    };
    this.setState(state => ({
      ...state,
      showingUsers: updatedShowingUsers
    }));
  };

  onModalOpen = () => {
    this.setState({ modal: true });
  };

  onModalClose = () => {
    this.setState({ modal: false });
  };
  onToggleFilterActive = (key, index) => {
    const updatedFilterField = [...this.state.filter[key]];
    updatedFilterField[index] = {
      ...this.state.filter[key][index],
      active: !this.state.filter[key][index].active
    };
    this.setState(state => ({
      ...state,
      filter: {
        ...state.filter,
        [key]: updatedFilterField
      }
    }));
  };

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.showingUsers === this.state.showingUsers){
      return
    }
    if(this.state.showButton && !this.state.showingUsers.find(user => user.active)) {
      this.triggerButtonAnimation()
      return this.setState(state => ({
        ...state,
        showButton: false
      }))
    }
    if(!this.state.showButton && this.state.showingUsers.find(user => user.active)){
      this.triggerButtonAnimation()
      return this.setState(state => ({
        ...state,
        showButton: true
      }))
    }
  }

  onChooseDate = async (key, date) => {
    const dateString = moment(date).format('YYYY-MM-DD')
    await this.setState(state => ({
      ...state,
      filter:{
        ...state.filter,
        date: {
          ...state.filter.date,
          [key]: dateString
        }
      }
    }))
  }

  onProceedPress = () => {
    this.props.navigation.navigate('ReportsScreen')
  }

  triggerButtonAnimation = () => {
    if(!this.state.showButton){
      Animated.spring(this.state.animations.buttonBottom, {
        toValue: 20
      }).start()
    } else {
      Animated.spring(this.state.animations.buttonBottom, {
        toValue: -100
      }).start()
    }
   
  }

  onApplyPress = () => {
    const actitiveFilterNames = this.state.filter.name.filter(n => n.active).map(n => n.name)
    let filteredByName
    
    if(actitiveFilterNames.includes('All') || actitiveFilterNames.length === 0){
      filteredByName = this.state.users
    } else {
      filteredByName = this.state.users.filter(user => actitiveFilterNames.includes(`${user.firstName} ${user.lastName}`))
    }
    // const filteredByDate = filteredByName.filter(user => )

    const filterData = {
      users: filteredByName.map(user => user.id),
      from: moment(this.state.filter.date.from).format('DD/MM/YYYY'),
      to: moment(this.state.filter.date.to).format('DD/MM/YYYY'),
      types: this.state.filter.type.filter(t => t.active).map(el => el.name),
      statuses: this.state.filter.status.filter(s => s.active).map(el => el.name)
    }

    this.props.setFilters(filterData)
    this.setState(state => ({
      ...state,
      showingUsers: filteredByName,
      modal: false
    }))
  }

  render() {
    return (
      <View style={styles.base}>
        <Header
          bg={teamHeaderBg}
          title="My Team"
          onOptionPressed={this.onModalOpen}
          option={filter}
        />
        <View style={styles.mainContainer}>
          <FlatList
            data={this.state.showingUsers}
            renderItem={({ item, index }) => (
              <ListItem
                active={this.state.showingUsers[index].active}
                onToggleActive={() => this.onToggleActive(index)}
                user={item}
              />
            )}
            keyExtractor={index => `teamlist-item-${index}`}
          />
        </View>
        <Animated.View style={[styles.buttonView, {bottom: this.state.animations.buttonBottom}]}>
          <Button onPress={this.onProceedPress} label='PROCEED'/>
        </Animated.View>
        <Modal animationType="fade" visible={this.state.modal}>
          <Filter
            onToggleFilterActive={this.onToggleFilterActive}
            filter={this.state.filter}
            onModalClose={this.onModalClose}
            onChooseDate={this.onChooseDate}
            dateFilter={this.state.filter.date}
            onApplyPress={this.onApplyPress}
          />
        </Modal>
      </View>
    );
  }
}
