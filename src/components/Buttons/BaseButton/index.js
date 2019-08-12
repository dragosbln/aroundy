import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient'

export default (props) => {

    return (
        <TouchableOpacity style={[styles.base, props.customStyle]}>
            <LinearGradient style={styles.gradient} colors={['#F9D213', '#F84100']}>
                <Text style={[styles.text, props.customTextStyle]}>{props.label}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}