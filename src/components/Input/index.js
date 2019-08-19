import React from 'react';
import { View, TextInput, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import {locked} from '../../assets/images'
import styles from './styles'

export default (props) => {

    return(
        <View style={styles.base}>
            <TextInput style={styles.textInput} placeholder={props.placeholder} placeholderTextColor='#fff' />
            <Image style={styles.icon} source={props.icon} />
            <LinearGradient colors={['#FAD961', '#E77A39']} start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}} style={styles.underline}></LinearGradient>
        </View>
    )
}