import React from "react";
import { FlatList } from "react-native";
import ListItem from './ListItem'
import styles from "./styles";
//TODO: move to its own component

export default props => {
  const data = [1,1,1,1,1,1,1,11,1,1,1,1,1,1]
    return (
      <FlatList 
        contentContainerStyle={styles.base}
        data={data}
        renderItem = {({item, index}) => <ListItem active={[0,1,4,6,7].includes(index)} id={index} />}
        scroll />
    );
}
