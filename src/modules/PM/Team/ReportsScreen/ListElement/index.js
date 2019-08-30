import React from "react";
import { View } from "react-native";
import styles from "./styles";
import CircularImage from "../../../../../components/CircularImage";
import { profilePic } from "../../../../../assets/images";
import Text from "../../../../../components/Text/BaseText";
import ChartBar from "./ChartBar";
import appData from '../../../../../utils/appData'

// const dummy = [];
// let left = 0.8;

// for (let i = 0; i < 6; i++) {
//   const height = Math.random() * left;
//   dummy.push({
//     height: height,
//     color: `#${Math.floor(100000 + Math.random() * 100000)}`
//   });
//   left -= height;
// }

export default props => {

    const requestNrs = {}
    props.report.requests.forEach(request => {
        if(requestNrs[request.type]){
            requestNrs[request.type].count = requestNrs[request.type].count + 1
        } else {
            requestNrs[request.type] = {
                count: 1
            }
        }
    });

    const dataToShow = Object.keys(requestNrs).map(key => ({
        height: requestNrs[key].count / props.maxNoRequests,
        color: appData.leaveColors[key]
    }))

  return (
    <View style={styles.base}>
      <View style={styles.imageContainer}>
        <CircularImage
          size={60}
          borderColor="#34ebc6"
          borderWidth={4}
          source={props.report.user.image}
        />
      </View>
      <View style={styles.bar} />
      <View>
        <Text>{props.name}</Text>
      </View>
      <View style={styles.barContainer}>
        <ChartBar data={dataToShow} />
      </View>
    </View>
  );
};
