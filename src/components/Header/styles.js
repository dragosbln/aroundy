import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    base: {
        width: '100%',
        height: 120,
        resizeMode: 'cover',
        justifyContent: 'flex-end'
    },
    headingContainer: {
        marginBottom: '8%',
        marginLeft: '7%'
    },
    text: {
        fontFamily: 'Montserrat-Medium'
    },
    optionContainer: {
        position: 'absolute',
        right: '4%',
        bottom: '25%',
        padding: 5,
    },
    icon:{
        width: 32,
        height: 32
    }
})