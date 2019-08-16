import { StyleSheet, Dimensions } from "react-native";
import colors from '../../../assets/theme/colors'

const screenHeight = Dimensions.get('window').height

export default StyleSheet.create({
  base: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  headingContainer: {
    width: '80%',
    height: 40,
    alignItems: 'center',
    marginTop: 60
  },
  heading: {
    color: colors.orange,
    fontSize: 20,
  },
  
  buttonsContainer: {
    width: '87%',
    flexDirection: 'row',
    height: 55,
    position: 'absolute',
    bottom: 40,
    zIndex: 10000,
    justifyContent: 'space-between',
  },
  buttonView: {
    width: 154
  },
  balanceContainer: {
    width: '80%',
    maxHeight: '40%',
  },
  row:{
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
