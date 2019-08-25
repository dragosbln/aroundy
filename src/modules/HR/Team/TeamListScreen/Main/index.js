import React from "react";
import { View } from "react-native";
import styles from "./styles";
import ListItem from "./ListItem";

export default props => {
  return (
    <View style={styles.base}>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => <ListItem id={index} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </View>
  );
};
