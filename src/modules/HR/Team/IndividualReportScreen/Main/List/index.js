import React from "react";
import { FlatList } from "react-native";
import ListItem from './ListItem'
import ListHeader from './ListHeader'
import styles from "./styles";


export default props => {
  const data = [1,1,1,1,1,1,1,11,1,1,1,1,1,1]
    return (
      <FlatList 
        contentContainerStyle={styles.base}
        data={data}
        renderItem = {({item, index}) => <ListItem status='pending' id={index} />}
        ListHeaderComponent={<ListHeader />}
        stickyHeaderIndices={[0]} />
    );
}
