import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import { profilePic } from "../../../../..//../assets/images";
import Text from "../../../../../../components/Text/BaseText";
import CircularImage from "../../../../../../components/CircularImage";
import PrimaryButton from "../../../../../../components/Buttons/PrimaryButton";
import Button from "../../../../../../components/Buttons/BaseButton";

export default props => {
  return (
    <View style={styles.base}>
      <View style={styles.imageContainer}>
        <CircularImage source={profilePic} customStyle={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text customStyle={styles.nameTxt}>Ann Andria</Text>
        <Text customStyle={styles.descriptionTxt}>
          Requested Vacation for{" "}
          <Text customStyle={styles.dateHighlightTxt}>22-27 February</Text>
        </Text>
        <Text customStyle={styles.timeTxt}>3 minutes ago</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.btnContainer}>
          <PrimaryButton
            label="APPROVE"
            customTextStyle={styles.approveBtnTxt}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button label="REJECT" customTextStyle={styles.rejectButtonTxt} />
        </View>
      </View>
    </View>
  );
};
