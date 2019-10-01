import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/colors'

export default StyleSheet.create({
    base: {
        width: '100%',
        height: '100%',
    },
    textInput:{
        width: '100%',
        height: '100%',
        fontSize: 18,
        paddingLeft: '15%',
        color: '#fff'
    },
    icon: {
        position: 'absolute',
        top: '23%',
        left: '3%',
        resizeMode: 'contain',
        height: 24,
        width: 24
    },
    underline: {
        width: '100%',
        height: 1,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0
    },
    errorText: {
        color: colors.red,
        fontSize: 14
    }
})