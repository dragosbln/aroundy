import { StyleSheet } from 'react-native';
import colors from '../../../../../assets/theme/colors'

export default StyleSheet.create({
    base: {
        width: '100%',
        height: 60,
        flexDirection: 'row-reverse'

    },
    deleteBtn: {
        width: 50,
        height: '100%',
        backgroundColor: colors.pink,
        justifyContent: 'center',
        alignItems: 'center'
    },
    editBtn: {
        width: 50,
        height: '100%',
        backgroundColor: colors.yellow,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginBtn: {
        width: 50,
        height: '100%',
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center'
    }
})