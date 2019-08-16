import { StyleSheet } from "react-native";
import colors from "../../../../assets/theme/colors";


export default StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30
  },
  monthText: {
    width: 150,
    fontSize: 24,
    textAlign: "center",
    marginTop: 1,
    color: colors.gray_primary,
    fontFamily: "Montserrat-Regular"
  },
  dayHeader: {
    color: colors.orange,
    fontSize: 18,
    fontFamily: "Montserrat-Medium"
  }
});
