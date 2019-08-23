import { StyleSheet } from "react-native";

export default StyleSheet.create({
  base:{
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  legendSubContainer: {
    flexDirection: 'row',
    marginHorizontal: 5,
    padding: 2,
    alignItems: 'center',
    flex: -1,
    justifyContent: 'space-between'
  },
  legendText:{
    marginLeft: 3
  },
});
