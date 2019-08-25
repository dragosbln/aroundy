import React from 'react';
import { ImageBackground, View } from 'react-native';
import styles from './styles'
import {loginBg} from '../../assets/images'
import LottieView from 'lottie-react-native'
import {austronaut} from '../../assets/animations'

export default class LoadingScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }


    render(){
        return(
            <ImageBackground source={loginBg} style={styles.base}>
                <View style={styles.contentContainer}>
                    <LottieView source={austronaut} autoPlay loop />
                </View>
            </ImageBackground>
        )
    }
}