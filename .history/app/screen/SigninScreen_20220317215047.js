import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Actions, Router, Scene} from 'react-native-router-flux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ViewImageScreen from './ViewImageScreen';

export default function SigninScreen() {
  const goToViewImageScreen = () => {
    Actions.viewImageScreen();
  };

  return (
    <View style={styles.signinScreen}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../assets/background.jpg')}>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  signinScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
 
});
