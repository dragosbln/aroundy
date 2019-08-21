import { StyleSheet } from 'react-native';
import colors from '../../../../../assets/theme/colors'

export default StyleSheet.create({
    base: {
        width: '100%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      selectedDay:{
          backgroundColor: colors.green
      },
      startingDay: {
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30
      },
      endingDay: {
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30
      }
})