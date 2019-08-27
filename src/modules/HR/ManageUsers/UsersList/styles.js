import { StyleSheet } from "react-native";
import colors from '../../../../assets/theme/colors'

export default StyleSheet.create({
  base: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    height: '100%',
    width: '100%',
    marginTop: '10%',
    alignItems: "center",

  },
  listContainer: {
    width: '100%',
    height: '50%'
  },
  buttonContainer: {
    height: 60,
    marginTop: 30,
    width: '80%'
  },
  buttonTextStyle: {
    fontSize: 24
  },
  listSeparator:{
    height: 5,
    width: '100%',
    borderWidth: 1,
    borderColor: colors.gray_light
  }
});
