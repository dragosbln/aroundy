import { StyleSheet } from "react-native";
import colors from "../../../../assets/theme/colors";

export default StyleSheet.create({
  base: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  headingContainer: {
    width: "80%",
    height: 40,
    alignItems: "center",
    marginTop: 35
  },
  heading: {
    color: colors.orange,
    fontSize: 20
  },
  inputContainer: {
    width: "90%",
    marginTop: "5%",
    height: 50,
  },
  input: {
    fontSize: 18,
    fontFamily: "Montserrat-Regular",
    borderBottomColor: colors.gray_primary,
    borderBottomWidth: 1,
    paddingBottom: 4
  },
  listContainer: {
    width: "80%",
    height: "30%"
  },
  buttonsContainer: {
    width: "87%",
    height: 120,
    position: "absolute",
    bottom: 10,
    zIndex: 10000,
    justifyContent: "space-between"
  },
  firstBtnRowContainer: {
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  backBtn: {
    width: 154,
    height: '100%'
  },
  setMeFreeBtn:{
    width: '100%',
    height: 55,
  }
});
