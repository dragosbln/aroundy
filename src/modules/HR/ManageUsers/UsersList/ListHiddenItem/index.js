import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default props => {
    return(
        <View style={styles.base}>
            <TouchableOpacity onPress={props.onDeletePress} style={styles.deleteBtn}>
            <Icon name='delete' color='#fff' size={32} />
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onEditPress} style={styles.editBtn}>
            <Icon name='account-edit' color='#fff' size={32} />
            
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onLoginPress} style={styles.loginBtn}>
            <Icon name='login' color='#fff' size={32} />
            </TouchableOpacity>
        </View>
    )
}