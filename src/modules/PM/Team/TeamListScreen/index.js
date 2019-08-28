import React from "react";
import { View, Modal, FlatList } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import { teamHeaderBg } from "../../../../assets/images";
import { filter } from "../../../../assets/images";
import Filter from './Filter'
import ListItem from './ListItem'

export default class Home extends React.Component {

  state={modal: false}
  

  onModalOpen = () => {
   this.setState({modal: true})
 }

 onModalClose = () => {
  this.setState({modal: false})
 }

  render() {
    return (
      <View style={styles.base}>
        <Header bg={teamHeaderBg} title="My Team" onOptionPressed={this.onModalOpen} option={filter} />
        <View style={styles.mainContainer}>
          <FlatList data={[1,1,1,1,1,1]}
          renderItem={({item}) => <ListItem />}
          keyExtractor={(item, index) => `teamlist-item-${index}`} />
          
        </View>
        <Modal animationType='fade' visible={this.state.modal}>
          <Filter onModalClose={this.onModalClose}/>
        </Modal>
      </View>
    );
  }
}
