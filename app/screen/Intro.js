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
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';

export default function IntroductionScreen() {
  const goToSigninScreen = () => {
    Actions.signinScreen()
  }

  const goToHomeScreen = () => {
    Actions.Tabs()
  }
  
  const showToast = (message) => {
    Toast.show({
        type: 'success',
        text1: message,
    });
  }

  const handleStart = () => {
    const user = auth().currentUser
    if(user != null) {
        showToast('Chào mừng quay trở lại')
        goToHomeScreen()
    }
    else {
      goToSigninScreen()
    }
  }
  
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/intro_back.png')}
    >

      <TouchableOpacity 
        style={styles.loginButton}
        onPress={handleStart}
      >
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
