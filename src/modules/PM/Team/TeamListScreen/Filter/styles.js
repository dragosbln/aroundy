import { StyleSheet } from "react-native";

export default StyleSheet.create({
  
  base: {
    width: "100%",
    height: "100%",
  },
  linearGradient: {
    width: "100%",
    height: "100%",
    alignItems: 'center'
  },
  filtersContainer:{
    width: '90%',
    height: '100%',
    marginTop: 15,
  },
  headingTxt: {
    fontSize: 22,
    fontFamily: 'Montserrat-Medium',
    marginBottom: 40
  },
  nameFilterContainer: {
    width: '100%',
    maxHeight: '30%'
  },
  timeFilterContainer:{
    width: '100%',
    height: '15%',
    alignItems: 'flex-end',
    marginTop: 30
  },
  timeInputsContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    justifyContent: 'space-between'
  },
  inputView:{
    width: '45%',
    height:'100%'
  },
  typeFilterContainer: {
    height: '25%'
  },
  iconContainer: {
    marginTop: 20
  },
  statusFilterContainer: {
    height: '15%'
  },
  buttonView: {
    width: '100%',
    height: 50
  }
  
});
