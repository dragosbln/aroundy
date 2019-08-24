import { StyleSheet } from 'react-native';
import colors from '../../../../../assets/theme/colors'

export default StyleSheet.create({
    base: {
        width: '100%',
        height: 25,
        
      },
      dayContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 1,
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
        color: '#f59898'
      },
      thisDayText:{
        color: colors.blue,
        fontFamily: 'Montserrat-Medium',
      },
      selectedText: {
        color: '#fff'
      }
})