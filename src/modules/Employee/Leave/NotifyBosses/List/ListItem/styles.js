import { StyleSheet } from "react-native";
import colors from "../../../../../../assets/theme/colors";

export default StyleSheet.create({
  
  base: {
    width: "100%",
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  icon:{
    width: 26,
    height: 26,
    marginRight: 15
  },
  text: {
    color: colors.gray_primary,
    fontSize: 18,
    fontFamily: 'Montserrat-Light'
  }
  
});
