import { StyleSheet } from "react-native";
import colors from "../../../../assets/theme/colors";

export default StyleSheet.create({
  base: {
      flex: 1,
      alignItems: 'center'
  },
  scrollContainer:{
    width: '85%',
  },
  scrollViewContainer:{
    alignItems: 'center'
  },
  rowsContainer: {
    width: '100%',
    marginTop: '3%',
    marginBottom: '10%'
  },
  row:{
      flexDirection: 'row',
      marginVertical: 5,
      alignItems: 'flex-start',
  },
  rowNameConainer:{
      width: '20%',
      marginTop: '1%'
  },
  rowContentContainer: {
      flex: 1
  },
  rowContentTxt:{
      fontSize: 20,
      color: colors.gray_primary
  },
  balanceContianer:{
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
  },
  balanceName: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  balanceNameIcon:{
    width: 27,
    height: 27,
  },
  balanceNameTxt: {
    fontSize: 18,
    marginLeft: 10,
    color: colors.gray_light
  },
  balanceDaysTxt: {
    fontSize: 20,
    color: colors.gray_light
  },
  buttonsContainer: {
      marginTop: '5%',
      width: '100%',
      height: 140,
      justifyContent:'space-between'
  },
  buttonView: {
      width: '100%',
      height: '45%'
  }
});
