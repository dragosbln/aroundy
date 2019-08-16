import { StyleSheet, Dimensions } from "react-native";
import colors from '../../../../assets/theme/colors'

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
    height: '17%',
    marginTop: screenHeight/12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  rowName: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowNameIcon:{
    width: 27,
    height: 27,
  },
  rowNameTxt: {
    fontSize: 20,
    marginLeft: 10
  },
  daysTxt: {
    fontSize: 28
  }
});
