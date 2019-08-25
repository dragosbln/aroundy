import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/colors'

export default StyleSheet.create({
    base: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        height: '12%',
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputsContainer:{
        height: '20%',
        width: '80%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    input: {
        width: '100%',
        height: 50,
    },
    textBtn: {
        width: '30%',
        height: '15%',
        position: 'absolute',
        top: '102%',
        
    },
    textBtnTxt: {
        color: colors.gray_primary
    },
    btnContainer: {
        width: 226,
        height: 55,
        marginTop: 50, 
    },
    statusContainer: {
        width: '80%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorTxt: {
        color: colors.pink,
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium'
    }
})