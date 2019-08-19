import { StyleSheet } from "react-native";
import colors from '../../../../assets/theme/colors'

export default StyleSheet.create({
  base: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  headingContainer: {
    width: '80%',
    height: 40,
    alignItems: 'center',
    marginTop: 60
  },
  heading: {
    color: colors.orange,
    fontSize: 20,
  },
  pickerContainer: {
    width: '70%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
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
});
