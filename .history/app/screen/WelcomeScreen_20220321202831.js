import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

export default function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/hutao.jpg')}
    >
      <View style ={styles.logoContainer}>
        
        <Image
          style ={styles.logo}
          source={require('../assets/hutao.png')}
        />
        <Text>Sell what you don't need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  loginButton: {
    width: '100%',
    height: 60,
    backgroundColor: '#e74c3c'
  },
  registerButton: {
    width: '100%',
    height: 60,
    backgroundColor: '#55efc4'
  }
})