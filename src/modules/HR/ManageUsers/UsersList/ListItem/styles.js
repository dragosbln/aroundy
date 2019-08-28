import { StyleSheet } from 'react-native';
import colors from '../../../../../assets/theme/colors'

export default StyleSheet.create({
    base: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        backgroundColor: '#fff'

    },
    contentContainer: {
        flexDirection: 'row',
        height: '100%',
        width: '90%',
        alignItems: 'center'
    },
    imageContainer: {
        width: 60,
        height: '100%',
        justifyContent: 'center',
        alignItems:'center'
    },
    textContainer: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    nameTxt: {
        fontSize: 20,
        color: colors.gray_primary
    },
    roletTxt:{
        fontSize: 16,
        color: colors.gray_light
    }
})