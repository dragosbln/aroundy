import { StyleSheet } from "react-native";

export default StyleSheet.create({
  base: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  calendarContainer: {
    width: '95%',
    height: '60%',
    position: 'relative'
  },
  legendContainer:{
    marginBottom: 30,
    width: '90%',
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
  buttonsContainer: {
    width: '87%',
    flexDirection: 'row',
    height: 55,
    position: 'absolute',
    bottom: 40,
    zIndex: 10000,
    justifyContent: 'space-between',
  },
  buttonView: {
    width: 154
  },
  dracuContainer: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: '1%',
    right: '3%',
    zIndex: 10000
  },
  dracu: {
    width: '100%',
    height: '100%'
  }
});
