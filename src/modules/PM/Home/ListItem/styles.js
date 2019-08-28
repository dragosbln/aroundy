import { StyleSheet } from "react-native";
import colors from "../../../../assets/theme/colors";

export default StyleSheet.create({
  
  base: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
    borderTopWidth: 1,
    borderTopColor: '#e8e8e8',
    paddingTop: 15,
    paddingBottom: 5
  },
  imageContainer:{

  },
  image: {
    width: 54,
    height: 54,
    borderWidth: 2,
    borderColor: colors.orange
  },
  infoContainer: {
    width: '50%',
    marginLeft: '2%'
  },
  nameTxt: {
    color: colors.gray_primary,
    fontFamily: 'Montserrat-Medium'
  }, 
  descriptionTxt: {
    color: '#000'
  }, 
  dateHighlightTxt:{
    fontFamily: 'Montserrat-Medium',
  },
  timeTxt: {
    color: colors.gray_primary,
    fontFamily: 'Montserrat-Light',
    fontSize: 12
  },
  buttonsContainer:{
  },
  btnContainer:{
    width: 105,
    height: 36,
    marginVertical: 2

  },
  approveBtnTxt: {
    fontSize: 16,
  },
  rejectButtonTxt: {
    color: colors.orange,
    fontSize: 16,
  }
  
});
