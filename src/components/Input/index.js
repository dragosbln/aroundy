import React from 'react';
import { View, TextInput, Image } from 'react-native';
import {locked} from '../../assets/images'
import styles from './styles'

export default (props) => {

    return(
        <View style={styles.base}>
            <TextInput style={styles.textInput} placeholder={props.placeholder} placeholderTextColor='#fff' />
            <Image style={styles.icon} source={props.icon} />
            <View style={styles.underline}></View>
        </View>
    )
}