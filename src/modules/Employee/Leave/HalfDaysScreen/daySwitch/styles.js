import { StyleSheet, Dimensions } from "react-native";
import colors from '../../../../../assets/theme/colors'

const screenHeight = Dimensions.get('window').height

export default StyleSheet.create({
  
  base:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 7
  },
  switchContainer: {
    height: 40,
    width: 150,
    justifyContent: 'center',
    
  },
  switchTextStyle: {
    fontFamily: 'Montserrat-Light',
  },
  switchSelectedTextStyle:{
    fontFamily: 'Montserrat-Medium',
    color: colors.gray_primary
  },
  dateTxt: {
    fontSize: 18,
    color: colors.gray_primary
  }
});
