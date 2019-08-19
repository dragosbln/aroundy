import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import { profilePic, checked, checkedActive } from "../../../../../..//../assets/images";
import Text from "../../../../../../../components/Text/BaseText";
import CircularImage from "../../../../../../../components/CircularImage";
import PrimaryButton from "../../../../../../../components/Buttons/PrimaryButton";

export default props => {
  return (
    <View style={styles.base}>
    <View style={styles.checkedContainer}>
      <Image source={props.active ? checkedActive : checked} style={styles.checkIcon} />
    </View>
      <View style={styles.imageContainer}>
        <CircularImage source={profilePic} customStyle={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text customStyle={styles.nameTxt}>Ann Andria</Text>
        <Text customStyle={styles.descriptionTxt}>Awesome PM</Text>
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
