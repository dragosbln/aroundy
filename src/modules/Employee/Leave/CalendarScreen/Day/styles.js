import { StyleSheet } from 'react-native';
import colors from '../../../../../assets/theme/colors'

export default StyleSheet.create({
    base: {
        width: '100%',
        height: 30,
        
      },
      dayContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 2,
      },
      selectedDay:{
          backgroundColor: colors.green_dark
      },
      startingDay: {
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30
      },
      endingDay: {
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30
      },
      circle: {
        width: 5,
        height: 5,
        borderRadius: 5,
      },
      dayText: {
        
      },
      unfocusedDaysText:{
        color: colors.gray_light,
      },
      weekendDayText:{
        color: colors.gray_primary
      },
      thisDayText:{
        color: colors.orange,
        fontFamily: 'Montserrat-Medium',
      }
})