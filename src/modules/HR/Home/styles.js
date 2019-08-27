import { StyleSheet } from "react-native";
import colors from '../../../assets/theme/colors'

export default StyleSheet.create({
  base: {
    width: "100%",
    height: "100%"
  },
  topImageContainer: {
    width: "100%",
    height: "30%"
  },
  counterContainer:{
    height: '30%',
    marginBottom: 20
  },
  topImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: 'center',
    alignItems: 'center'
  },
  counterContainer:{
    height: '30%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  bgCardContainer: {
    width: "100%",
    height: "30%",
    position: "absolute",
    top: "22%"
  },
  bgCard: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  mainContainer: {
    position: "absolute",
    top: "38%",
    width: "100%",
    height: "100%",
    alignItems: 'center',
    backgroundColor: "#fff",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60
  },
  balanceContainer: {
    height: 30,
    width: 120,
    marginTop: '5%',
    marginLeft: '7%',
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
      marginTop: '5%',
      marginRight: '7%',
      justifyContent: 'space-between'
  },
  daysTxt: {
      color: '#fff',
      fontSize: 18,
      marginBottom: 2
  },
  headingContainer:{
    marginTop: 30,
    width: '80%'
  },
  headingTxt:{
    color: colors.gray_primary,
    fontFamily: 'Montserrat-medium',
    marginBottom: 30
  },
  listContainer: {
    marginBottom: 92,
    height: '43%'
  },
  separator: { 
    height: 15 
  }
});
