import React from "react";
import { View, FlatList } from "react-native";
import styles from "./styles";
import HeadingText from "../Text/HeadingText";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
import utils from "../../utils";

export default props => {
  return (
    <View style={styles.base}>
      <View style={styles.panHandlerView} {...props.panHandlers}></View>
      <View style={styles.headingContainer}>
        <HeadingText customStyle={styles.headingTxt}>History</HeadingText>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={props.data}
          renderItem={({ item, index }) => (
            item.from ? <ListItem
              date={utils.formatInterval({ from: item.from, to: item.to })}
              type={item.type}
              status={item.status}
              id={index}
            /> : <View style={styles.separator}></View>
          )}
          ListHeaderComponent={<ListHeader />}
          stickyHeaderIndices={[0]}
        />
      </View>
    </View>
  );
};
