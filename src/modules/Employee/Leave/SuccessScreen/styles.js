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
  
  buttonView: {
    width: '87%',
    flexDirection: 'row',
    height: 55,
    position: 'absolute',
    bottom: 40,
    zIndex: 10000,
    justifyContent: 'center',
    elevation:1
  },
  balanceContainer: {
    width: '70%',
    height: '12%',
    marginTop: 10,
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
    fontSize: 18,
    marginLeft: 10,
    color: colors.gray_light
  },
  daysTxt: {
    fontSize: 20,
    color: colors.gray_light
  },
  summaryContainer: {
    width: '75%',
    height: '15%',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  summaryTxt: {
    fontSize: 20,
    lineHeight: 35,
    textAlign: 'center'
  },
  fingersCrossedContainer: {
    
  },
  fingersCrossedText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 28
  },
  cancelContainer:{
    height: 30,
    width: '50%',
    marginTop: 15
  },
  cancelTxt: {
    color: colors.orange,
    fontSize: 18
  }

});
