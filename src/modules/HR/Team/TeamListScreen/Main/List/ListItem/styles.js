import { StyleSheet } from "react-native";
import colors from "../../../../../../../assets/theme/colors";

export default StyleSheet.create({
  
  base: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 20,
    paddingVertical: 25,
    backgroundColor: '#fff',
    
  },
  checkedContainer: {
    height: '100%',
    marginRight: 5
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
    width: '35%',
    marginLeft: '2%'
  },
  nameTxt: {
    color: colors.gray_primary,
    fontSize: 18,
    fontFamily: 'Montserrat-Medium'
  }, 
  descriptionTxt: {
    fontFamily: 'Montserrat-Light',
    color: '#000',
    fontSize: 12
  }, 
  
  buttonsContainer:{
  },
  btnContainer:{
    width: 122,
    height: 36,
    marginVertical: 2

  },
  approveBtnTxt: {
    fontSize: 16,
  },
  
});
