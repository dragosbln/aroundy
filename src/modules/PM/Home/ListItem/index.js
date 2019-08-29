import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import Text from "../../../../components/Text/BaseText";
import CircularImage from "../../../../components/CircularImage";
import PrimaryButton from "../../../../components/Buttons/PrimaryButton";
import Button from "../../../../components/Buttons/BaseButton";
import utils from "../../../../utils/functions";
import appData from "../../../../utils/appData";
//TODO: add profile pics and dates

//URGENT: compute time past since request
export default props => {
  return (
    <View style={styles.base}>
      <View style={styles.imageContainer}>
        <CircularImage
          source={props.request.Request.User.image}
          customStyle={styles.image}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text
          customStyle={styles.nameTxt}
        >{`${props.request.Request.User.firstName} ${props.request.Request.User.lastName}`}</Text>
        <Text customStyle={styles.descriptionTxt}>
          Requested Vacation ({appData.leaveTypes[props.request.type]}) for{" "}
          <Text customStyle={styles.dateHighlightTxt}>
            {utils.formatInterval(
              { from: props.request.from, to: props.request.to },
              true
            )}
          </Text>
        </Text>
        <Text customStyle={styles.timeTxt}>
          {utils.timePassedFrom(props.request.createdAt)}
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.btnContainer}>
          <PrimaryButton
            label="APPROVE"
            customTextStyle={styles.approveBtnTxt}
            onPress={props.onApprovePress}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button
            label="REJECT"
            customTextStyle={styles.rejectButtonTxt}
            onPress={props.onRejectPress}
          />
        </View>
      </View>
    </View>
  );
};
