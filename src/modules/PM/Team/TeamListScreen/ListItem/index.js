import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { checked, checkedActive } from "../../../..//../assets/images";
import Text from "../../../../../components/Text/BaseText";
import CircularImage from "../../../../../components/CircularImage";
import PrimaryButton from "../../../../../components/Buttons/PrimaryButton";

export default props => {
  return (
    <View style={styles.base}>
    <TouchableOpacity onPress={props.onToggleActive} style={styles.checkedContainer}>
      <Image source={props.active ? checkedActive : checked} style={styles.checkIcon} />
    </TouchableOpacity>
      <View style={styles.imageContainer}>
        <CircularImage source={props.user.image} customStyle={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text customStyle={styles.nameTxt}>{`${props.user.firstName} ${props.user.lastName}`}</Text>
        <Text customStyle={styles.descriptionTxt}>{`${props.user.role}`}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.btnContainer}>
          <PrimaryButton
            label="SEE REPORT"
            customTextStyle={styles.approveBtnTxt}
          />
        </View>
      </View>
    </View>
  );
};
