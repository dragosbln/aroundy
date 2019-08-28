import { StyleSheet } from "react-native";
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({
  base: {
    width: "100%",
    height: "100%",
    alignItems: "center"
  },
  header: {
    height: 154,
    alignItems: "flex-end"
  },
  textContainerStyle: {
    marginRight: 20,
    marginBottom: 20,
    width: '50%'
  },
  headerTextStyle:{
    fontSize: 24
  },
  profilePicContainer: {
    position: "absolute",
    top: 75,
    left: 35
  },
  summaryContainer: {
    width: "75%",
    height: "15%",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  summaryTxt: {
    fontSize: 20,
    lineHeight: 35,
    textAlign: "center"
  },
  cancelContainer: {
    height: 30,
    width: "50%",
    marginTop: 10
  },
  cancelTxt: {
    color: colors.orange,
    fontSize: 18
  },
  counterContainer: {
    height: "10%",
    marginTop: 15
  },
  counterStyle: {
    color: colors.gray_primary
  },
  footerStyle: {
    color: "#000"
  },
  setMeFreeBtn: {
    width: "90%",
    height: 55,
    marginTop: "7%"
  },
  mainContainer: {
    position: "absolute",
    top: "85%",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    elevation: 5,
    shadowRadius: 3,
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  }
});
