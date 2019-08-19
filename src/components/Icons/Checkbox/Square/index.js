import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default props => {
  return (
    <Icon
      size={props.size || 24}
      name={props.active ? "checkbox-marked" : "checkbox-marked-outline"}
      color={props.color || "#fff"}
    />
  );
};
