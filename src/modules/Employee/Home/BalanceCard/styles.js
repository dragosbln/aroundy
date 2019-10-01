import { StyleSheet } from "react-native";

export default StyleSheet.create({
  
  base: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: "center", 
    alignItems: 'center'
    
  },
  textContainer: {
    width: '80%',
    height: '100%',
    flexDirection: "row",
    marginTop: '15%',
    justifyContent: "space-between"
  },
  balanceContainer: {
    height: 30,
    width: 120,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  balanceTxt:{
      fontFamily: 'Montserrat-Medium'
  },
  daysContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      height: 30,
      width: 80,
      justifyContent: 'space-between'
  },
  daysTxt: {
      color: '#fff',
      fontSize: 18,
      marginBottom: -2
  }
});
