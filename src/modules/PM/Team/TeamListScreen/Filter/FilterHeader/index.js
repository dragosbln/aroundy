import React from 'react';
import { View } from 'react-native';
import Text from '../../../../../../components/Text/BaseText'
import styles from './styles'

export default props => {

    return(
        <View style={styles.base}>
            <Text customStyle={styles.text}>{props.name}</Text>
            <View style={styles.line} />
        </View>
    )
}