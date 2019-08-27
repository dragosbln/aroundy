import React from 'react';
import { View } from 'react-native';
import styles from './styles'
import CircularImage from '../../../../../components/CircularImage'
import {profilePic} from '../../../../../assets/images'
import Text from '../../../../../components/Text/BaseText'
import ChartBar from './ChartBar'



export default props => {
    const dummy = []
    let left = 0.8
    
    for(let i=0; i < 6; i++){
        const height = Math.random() * left
        dummy.push({
            height: height,
            color: `#${Math.floor(100000 + Math.random() * 100000)}`
        })
        left-=height
    }
    return(
        <View style={styles.base}>
        <View style={styles.imageContainer}>
        <CircularImage radius={30} border='red' source={profilePic} />

        </View>
            <View style={styles.bar} />
            <View>
                <Text>{props.name}</Text>
            </View>
            <View style={styles.barContainer}>
                <ChartBar data={dummy} />
            </View>
        </View>
    )
}