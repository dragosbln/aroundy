import React from "react";
import { View, Modal } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import { teamHeaderBg } from "../../../../assets/images";
import Main from "./Main";
import { filter } from "../../../../assets/images";
import Filter from './Filter'

export default class Home extends React.Component {

  state={modal: false}
  

 showModal = () => {
   this.setState({modal: true})
 }

  render() {
    return (
      <View style={styles.base}>
        <Header bg={teamHeaderBg} title="My Team" onOptionPressed={this.showModal} option={filter} />
        <View style={styles.mainContainer}>
          <Main />
        </View>
        <Modal animationType='fade' visible={this.state.modal}>
          <Filter />
        </Modal>
      </View>
    );
  }
}
