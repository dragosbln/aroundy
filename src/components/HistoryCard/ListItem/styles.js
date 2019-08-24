import { StyleSheet } from "react-native";

export default StyleSheet.create({
  
  base: {
    width: "100%",
    minHeight: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8'
  },
  container: {
    width: '80%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'

  },
  dateContainer:{
    flex: 2,
    paddingRight: 15
  },
  typeContainer: {
    flex: 2,
  },
  iconContainer:{
    flex: 1,
    alignItems: 'flex-end',
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10
  }
  
});
