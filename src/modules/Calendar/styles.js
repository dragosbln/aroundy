import { StyleSheet } from "react-native";

export default StyleSheet.create({
  base: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  legendContainer:{
    flexDirection: 'row',
    marginBottom: 30,
    width: '90%',
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
  }    
});
