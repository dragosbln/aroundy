import React from "react";
import { FlatList, View } from "react-native";
import ListItem from "./ListItem";
import styles from "./styles";

export default props => {
  const data = [1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1];
  return (
    <FlatList
      contentContainerStyle={styles.base}
      data={data}
      renderItem={({ item, index }) => <ListItem id={index} />}
      ItemSeparatorComponent={()=><View style={{height: 15}}/>}
    />
  );
};
