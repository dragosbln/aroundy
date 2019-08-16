import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles'

export default (props) => {

    return (
        <TouchableOpacity style={[styles.base, props.customStyle]}>
                <Text style={[styles.text, props.customTextStyle]}>{props.label}</Text>
        </TouchableOpacity>
    )
}   