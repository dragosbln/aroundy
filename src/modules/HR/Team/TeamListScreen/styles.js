import { StyleSheet } from "react-native";
import colors from '../../../../assets/theme/colors'

export default StyleSheet.create({
  base: {
    width: "100%",
    height: "100%",
    alignItems: 'center'
  },
  header:{
    height: 154,
    alignItems: 'flex-end'
  },
  
  mainContainer: {
    width: "100%",
    height: "100%",
  },
  filterContainer: {
    position: 'absolute',
    height: '85%',
    width: '100%',
    bottom: -50,
    zIndex: 1000,
    backgroundColor: 'red'
  }
});
