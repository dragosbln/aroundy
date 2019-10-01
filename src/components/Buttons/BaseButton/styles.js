import { StyleSheet } from 'react-native';
import colors from '../../../assets/theme/colors'

export default StyleSheet.create({
    base: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: colors.gray_primary,
        borderRadius: 50,
        shadowRadius: 3,
        shadowOpacity: 0.2,
        shadowOffset: {
          height: 1,
          width: 1
        },
        elevation: 1,
    },
    text: {
        color: colors.gray_primary,
        fontSize: 18
    },
    disabledTxt: {
        color: colors.gray_light
    }
})