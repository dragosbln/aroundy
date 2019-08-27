import { StyleSheet } from "react-native";
import colors from '../../../../assets/theme/colors'

export default StyleSheet.create({
  base: {
    width: "100%",
    height: "100%",
    alignItems: 'center'
  },
  contentContainer: {
    height: '100%',
    width: '100%',
    alignItems: "center",

  },
  statusContainer: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    width: '80%',
    height: '50%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input:{
    width: '100%',
    height: 40,
  },
  textStyle: {
    color: '#000',
    marginLeft: 10,
  },
  buttonContainer: {
    height: 60,
    marginTop: 30,
    width: '80%'
  },
  buttonTextStyle: {
    fontSize: 24
  },
  picker: {
    width: '65%',
    fontFamily: 'Montserrat'
  },
  errorText: {
    color: colors.pink
  },
  animationContainer: {
    position: 'absolute',
    width: '110%',
    height: '110%',
    bottom: -90,
    zIndex: -1
  }
});
