import { StyleSheet } from "react-native";

export default StyleSheet.create({
  base:{
    flexDirection: 'row',
    justifyContent: 'center'
  },
  legendSubContainer: {
    flexDirection: 'row',
    marginHorizontal: 5,
    alignItems: 'center',
    flex: -1,
    justifyContent: 'space-between'
  },
  legendText:{
    marginLeft: 3
  },
});
