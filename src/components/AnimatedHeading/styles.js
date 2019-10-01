import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/colors'

export default StyleSheet.create({
    base: {
        width: '100%',
        height: '100%',
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
})