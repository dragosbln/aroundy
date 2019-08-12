import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    base: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputsContainer:{
        height: '25%',
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
        height: '10%',
        position: 'absolute',
        top: '105%',
        
    },
    textBtnTxt: {
        color: '#8C8C8C'
    },
    btnContainer: {
        width: 226,
        height: 55,
        marginTop: 50, 
    }
})