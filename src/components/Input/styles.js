import { StyleSheet } from 'react-native';

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
        height: 2,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0
    }
})