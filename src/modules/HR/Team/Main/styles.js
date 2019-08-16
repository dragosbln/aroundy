import { StyleSheet } from "react-native";
import colors from "../../../../assets/theme/colors";

export default StyleSheet.create({
  
  base: {
    width: "100%",
    height: "100%",
    alignItems: 'center'
  },
  headingContainer:{
    marginTop: 30,
    width: '80%'
  },
  headingTxt:{
    color: colors.gray_primary,
    fontFamily: 'Montserrat-medium'
  },
  listContainer: {
    marginBottom: 92,
    height: '50%'
  }
  
});
