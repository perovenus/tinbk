import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
} from 'react-native'
import { Actions } from 'react-native-router-flux'

export default function IntroductionScreen() {
    const goToSigninScreen = () => {
        Actions.signinScreen()
      }
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/intro_back.png')}
        >

            <TouchableOpacity style={styles.loginButton}
            onPress={goToSigninScreen}>
                <Text style={{ fontSize: 24, color: 'white' }}>Bắt đầu</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
    }

const styles = StyleSheet.create({
    background: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'flex-end'
        // justifyContent: 'space-between'
        // justifyContent: 'center',
    },
    
    loginButton: {
        width: 145,
        height: 60,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#2F80ED',
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginRight: 20,
        bottom: 70,
    },
   image: {
       width: 250,
       height: 250
   }
})
