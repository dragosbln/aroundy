import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import {loginBg} from '../../assets/images'
import styles from './styles'
import Input from '../../components/Input'
import TextButton from '../../components/Buttons/TextButton'
import Button from '../../components/Buttons/PrimaryButton'
import {passwordIcon, emailIcon} from '../../assets/images'

export default class Login extends React.Component {
    


    render(){
        return(
            <ImageBackground source={loginBg} style={styles.base}>
                <View style={styles.logoContainer}>
                    <Text>Logo</Text>
                </View>
                <View style={styles.inputsContainer}>
                    <View style={styles.input}>
                        <Input placeholder='Email' icon={emailIcon} />
                    </View>
                    <View style={styles.input}>
                        <Input placeholder='Password' icon={passwordIcon} />
                    </View>
                    <View style={styles.textBtn}>
                        <TextButton customStyle={styles.textBtnTxt}>forgot pass?</TextButton>
                    </View>
                </View>
                <View style={styles.btnContainer}>
                    <Button label='LOGIN' />
                </View>
                
            </ImageBackground>
        )
    }
}