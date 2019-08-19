import { StyleSheet } from "react-native";

export default StyleSheet.create({
  base: {
    width: "100%",
    height: "100%"
  },
  topImageContainer: {
    width: "100%",
    height: "30%"
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
  counterHeading: {
    marginBottom: 3
  },
  counterFooter: {
    color: '#C2C2C3'
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
  }
});
