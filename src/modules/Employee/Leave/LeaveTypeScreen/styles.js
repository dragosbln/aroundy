import { StyleSheet, Platform } from "react-native";
import colors from "../../../../assets/theme/colors";

export default StyleSheet.create({
  base: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  headingContainer: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    marginTop: 60,
    flexDirection: "row"
  },
  headingRunningContainer: {
    width: "80%",
    height: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center"
  },
  heading: {
    position: "absolute",
    color: colors.orange,
    fontSize: 20
  },
  pickerContainer: {
    width: "90%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === 'android' ? '10%' : 0

  },
  picker: { 
    width: "100%", 
    height: "100%",
  },
  buttonsContainer: {
    width: "87%",
    flexDirection: "row",
    height: 55,
    position: "absolute",
    bottom: 40,
    zIndex: 10000,
    justifyContent: "space-between"
  },
  buttonView: {
    width: 154
  }
});
