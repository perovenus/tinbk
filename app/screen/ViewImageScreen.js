import React from 'react';
import {Image, Pressable, StyleSheet, View, Text, ImageBackground, Button} from 'react-native'
import { Actions } from 'react-native-router-flux';

function ViewImageScreen(props) {
  const goToSigninScreen = () => {
      Actions.signinScreen()
  }
  return (
    <View style={styles.container}>
        <Text style={styles.closeIcon}></Text>
        <View style={styles.deleteIcon}></View>

        <ImageBackground
            source={require('../assets/chair.jpg')}
        >
            <Button title='Go back' onPress={goToSigninScreen}/>

        </ImageBackground>
    </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1
    },
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: '#e74c3c',
        position: 'absolute',
        top: 40,
        left: 20
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: '#55efc4',
        position: 'absolute',
        top: 40,
        right: 20,
    },
    image:{
        width: '100%',
        height: '100%'
    }
})

export default ViewImageScreen;