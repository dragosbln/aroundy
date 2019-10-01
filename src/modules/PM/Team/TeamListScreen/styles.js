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
    height: "80%",
  },
  filterContainer: {
    position: 'absolute',
    height: '85%',
    width: '100%',
    bottom: -50,
    zIndex: 1000,
    backgroundColor: 'red'
  },
  buttonView: {
    width: '80%',
    height: 50,
    position: 'absolute',
    bottom: '6%',
    elevation: 1,
    shadowColor:'#000',
    shadowRadius: 2,
    shadowOffset: {
      width: 1,
      height: 1
    }
  }
});
