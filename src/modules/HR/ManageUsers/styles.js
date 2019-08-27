import { StyleSheet } from "react-native";
import colors from '../../../assets/theme/colors'

export default StyleSheet.create({
  base: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'red',
    alignItems: "center",

  },
  formContainer: {
    width: '80%',
    height: '30%',
    justifyContent: 'space-between'
  },
  input:{
    width: '100%',
    height: 40,
  },
  textStyle: {
    color: '#000',
    marginLeft: 10,
  }
});
