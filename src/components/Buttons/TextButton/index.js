import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles'

export default (props) => {

    return(
        <TouchableOpacity style={styles.base}>
            <Text style={[styles.text, props.customStyle]}>{props.children}</Text>
        </TouchableOpacity>
    )
}