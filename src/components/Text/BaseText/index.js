import React from 'react';
import { Text } from 'react-native';
import styles from './styles'

export default (props) => {

    return (
        <Text style={[styles.base, props.customStyle]}>{props.children}</Text>
    )
}   