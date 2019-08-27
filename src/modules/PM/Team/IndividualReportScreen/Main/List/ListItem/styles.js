import { StyleSheet } from "react-native";

export default StyleSheet.create({
  
  base: {
    width: "100%",
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8'
  },
  container: {
    width: '80%',
    justifyContent: 'space-between',
    flexDirection: 'row',

  },
  iconContainer:{
    width: '20%',
    alignItems: 'flex-end',
    paddingRight: '2.5%',
  },
  icon: {
    width: 25,
    height: 25,
  }
  
});
