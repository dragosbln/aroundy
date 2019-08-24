import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../../../assets/theme/colors'

export default (props) => {

    return (
        <TouchableOpacity disabled={props.disabled} onPress={props.onPress} style={[styles.base, props.customStyle]}>
            <LinearGradient style={styles.gradient} start={{x: 0.5, y: -1}} end={{ x:0.5, y: 1.8}} colors={props.disabled ? [colors.gray_light, colors.gray_primary] : ['#F9D213', '#F84100']}>
                <Text style={[styles.text, props.customTextStyle]}>{props.label}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}   