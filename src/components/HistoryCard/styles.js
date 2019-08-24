import { StyleSheet } from "react-native";
import colors from '../../assets/theme/colors'

export default StyleSheet.create({
  
  base: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
  },
  headingContainer:{
    marginTop: 30,
    width: '80%',
  },
  headingTxt:{
    color: '#646464',
    fontFamily: 'Montserrat-medium'
  },
  listContainer: {
    height: '80%',
  },
  panHandlerView: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 50,
    zIndex: 100,
  },
  separator: {
    height: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray_light
  }
});
