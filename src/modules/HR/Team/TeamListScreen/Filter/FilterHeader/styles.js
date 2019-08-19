import { StyleSheet } from 'react-native';
import colors from '../../../../../../assets/theme/colors'

export default StyleSheet.create({
    base: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    text: {
        color: colors.gray_light,
        marginRight: 20
    },
    line: {
        height: 1,
        flex: 1,
        backgroundColor: colors.gray_light
    }
})