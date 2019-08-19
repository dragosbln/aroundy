import { StyleSheet, Dimensions } from "react-native";
import colors from '../../../../assets/theme/colors'


export default StyleSheet.create({
  base: {
    width: "100%",
    height: "100%",
    alignItems: 'center'
  },
  headingContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    marginVertical: 10,
    alignItems: 'flex-end'
  },
  headingTxt:{
    color: colors.orange,
    fontSize: 18
  },
  chartContainer:{
  },
  chart:{
    color: colors.orange,
    fontSize: 35,
  },
  legendContainer:{
    width: '100%',
    height: '15%',
    alignItems: 'flex-end'
  },
  mainContainer: {
    position: "absolute",
    top: "85%",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    elevation: 5
  },
  
});
