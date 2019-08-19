import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../../../../assets/theme/colors";

export default props => {
  return (
    <Icon
      size={props.size || 24}
      name={props.active ? "checkbox-marked-circle" : "checkbox-marked-circle-outline"}
      color={props.color || (props.active ? colors.green : colors.gray_primary) }
    />
  );
};
