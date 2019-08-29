import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../../../assets/theme/colors'

export default StyleSheet.create({
    base: {
        width: '100%',
        height: Dimensions.get('window').width/11,
        
      },
      dayContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: Dimensions.get('window').width/75,
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
      },
      selectedFreeDay: {
        backgroundColor: '#759c73'
      },
      selectedWeekendDay: {
        color: colors.pink
      }
})