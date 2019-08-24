import { StyleSheet } from "react-native";
import colors from '../../../assets/theme/colors'

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
  },
  dateContainer: {
    flex: 2,
    alignItems: 'flex-start',
    paddingRight: 15
  },
  typeContainer: {
    flex: 2,
    alignItems: 'flex-start',
  },
  statusContainer: {
    flex: 1,
    alignItems: 'flex-end'
  }
  
});
