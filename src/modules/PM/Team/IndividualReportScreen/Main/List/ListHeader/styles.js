import { StyleSheet } from "react-native";
import colors from '../../../../../../../assets/theme/colors'

export default StyleSheet.create({
  
  base: {
    width: "100%",
    alignItems: 'center',
    paddingBottom: 8,
    backgroundColor: '#fff'
  },
  container: {
    width: '80%',
    justifyContent: 'space-between',
    flexDirection: 'row',

  },
  text:{
    color: colors.orange
  }
  
});
