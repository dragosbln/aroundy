import React from "react";
import { View, FlatList } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import { teamHeaderBg } from "../../../../assets/images";
import ListElement from './ListElement'
import Legend from '../../../../components/Legend'
import colors from '../../../../assets/theme/colors'

const dummy = [
  {
    name: 'Leave',
    color: colors.green
  },
  {
    name: 'idk',
    color: colors.yellow
  },
  {
    name: 'idk2',
    color: colors.pink
  },
  {
    name: 'idk2',
    color: colors.orange
  }
]

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
        <Header bg={teamHeaderBg} title="My Team" />
        <View style={styles.mainContainer}>
          <FlatList horizontal data={[1,1,1,1,1,1,1,1]} 
          renderItem={() => <ListElement name='joe' />} />
        </View>
        <View style={styles.legendContainer}>
          <Legend data={dummy} />
        </View>
      </View>
    );
  }
}
