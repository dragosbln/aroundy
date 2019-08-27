import { StyleSheet, Dimensions } from "react-native";
import colors from '../../../../../assets/theme/colors'
const screenW = Dimensions.get('window').width

export default StyleSheet.create({
  base: {
    width: screenW / 4.5,
    height: '100%',
    flexDirection: 'column-reverse',
    alignItems: 'center'
  },
  bar: {
    width: '100%',
    height: 1,
    backgroundColor: colors.gray_light,
    marginVertical: 10
  },
  imageContainer: {
      marginTop: 10,
      marginBottom: 5
  },
  barContainer: {
      width: '50%',
      flex: 1,
  }
});
