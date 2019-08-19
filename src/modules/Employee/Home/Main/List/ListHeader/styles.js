import { StyleSheet } from "react-native";
import colors from '../../../../../../assets/theme/colors'

export default StyleSheet.create({
  
  base: {
    width: "100%",
    alignItems: 'center',
    paddingTop: 27,
    paddingBottom: 8,
    backgroundColor: '#fff'
  },
  container: {
    width: '75%',
    justifyContent: 'space-between',
    flexDirection: 'row',

  },
  text:{
    color: colors.orange
  }
  
});
